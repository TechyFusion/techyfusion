"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, Video, CheckCircle, ArrowLeft, ArrowRight, Sparkles, User, Briefcase, Mail } from "lucide-react";

export default function BookConsultationPage() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  // Intake Form states
  const [formState, setFormState] = useState({ name: "", email: "", org: "", details: "" });
  const [isBooked, setIsBooked] = useState(false);

  // Generate next 7 days for booking calendar (excluding Sunday)
  const getBookingDays = () => {
    const days = [];
    const date = new Date();
    for (let i = 0; days.length < 6; i++) {
      const nextDate = new Date();
      nextDate.setDate(date.getDate() + i);
      const dayOfWeek = nextDate.getDay();
      
      // Exclude Sunday (0)
      if (dayOfWeek !== 0) {
        const dateString = nextDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
        days.push({
          raw: nextDate.toISOString().split("T")[0],
          label: dateString,
          weekday: nextDate.toLocaleDateString("en-US", { weekday: "short" }),
          dayNum: nextDate.getDate()
        });
      }
    }
    return days;
  };

  const bookingDays = getBookingDays();

  const timeSlots = [
    "09:30 AM",
    "10:30 AM",
    "11:30 AM",
    "02:00 PM",
    "03:00 PM",
    "04:30 PM",
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime && formState.name && formState.email) {
      setIsBooked(true);
    }
  };

  const selectedDateLabel = bookingDays.find(d => d.raw === selectedDate)?.label || selectedDate;

  return (
    <div className="relative min-h-screen pb-20">
      {/* Background Decorative Glows */}
      <div className="absolute top-10 right-10 w-[350px] h-[350px] glow-bg-cyan rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] glow-bg-purple rounded-full pointer-events-none" />

      {/* Page Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/10 text-xs font-semibold text-accent-blue tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            Direct Consultation
          </div>
          <h1 className="text-4xl sm:text-5xl font-[family-name:var(--font-heading)] italic font-normal text-charcoal tracking-tight">
            Schedule a Free{" "}
            <span className="text-accent-blue">
              Discovery Call
            </span>
          </h1>
          <p className="text-text-muted text-base md:text-lg font-light leading-relaxed">
            Select an open date and timeslot below to secure a 30-minute system alignment call with our engineering leads.
          </p>
        </div>
      </section>

      {/* Main interactive scheduler shell */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="card-soft rounded-3xl p-8 relative overflow-hidden">
          {isBooked ? (
            /* Booking confirmation */
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle className="w-10 h-10" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-[family-name:var(--font-inter)] font-semibold text-charcoal">Discovery Call Scheduled!</h3>
                <p className="text-text-muted text-sm leading-relaxed max-w-md mx-auto">
                  Excellent, {formState.name}. We have registered your session. A calendar invite with meeting files has been dispatched to {formState.email}.
                </p>
              </div>

              {/* Receipt details */}
              <div className="bg-white/90 border border-black/10 rounded-2xl p-6 w-full max-w-md text-left space-y-4">
                <h4 className="text-xs font-extrabold text-text-muted uppercase tracking-widest border-b border-border-soft pb-2">Session Details:</h4>
                <div className="space-y-3.5 text-sm text-text-muted">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent-blue" />
                    <span className="font-semibold">{selectedDateLabel}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent-blue" />
                    <span className="font-semibold">{selectedTime}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Video className="w-5 h-5 text-accent-blue" />
                    <span>Google Meet (Invite contains URL)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black/5 border border-black/10 text-charcoal font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Return Home
                </Link>
              </div>
            </div>
          ) : (
            /* Booking Flow Form */
            <form onSubmit={handleBookingSubmit} className="space-y-8">
              {/* Step 1: Select Date */}
              <div className="space-y-4">
                <h3 className="text-base font-[family-name:var(--font-inter)] font-semibold text-charcoal flex items-center gap-2">
                  <span className="w-5 h-5 rounded-lg bg-accent-blue/15 text-accent-blue flex items-center justify-center text-xs">1</span>
                  Select Date
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {bookingDays.map((day) => (
                    <button
                      key={day.raw}
                      type="button"
                      onClick={() => {
                        setSelectedDate(day.raw);
                        setSelectedTime(null); // Reset time when date changes
                      }}
                      className={`p-4 rounded-xl border flex flex-col items-center justify-center transition-all ${
                        selectedDate === day.raw
                          ? "bg-accent-blue border-transparent text-white shadow-md shadow-accent-blue/15 scale-[1.02]"
                          : "bg-white/40 border-black/10 text-text-muted hover:bg-white/80 hover:text-charcoal"
                      }`}
                    >
                      <span className="text-[10px] uppercase font-bold tracking-wider opacity-75">{day.weekday}</span>
                      <span className="text-xl font-extrabold mt-1">{day.dayNum}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Time */}
              {selectedDate && (
                <div className="space-y-4 transition-all duration-300 animate-fadeIn">
                  <h3 className="text-base font-[family-name:var(--font-inter)] font-semibold text-charcoal flex items-center gap-2">
                    <span className="w-5 h-5 rounded-lg bg-accent-blue/15 text-accent-blue flex items-center justify-center text-xs">2</span>
                    Select Session Time (EST)
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-3 px-1 rounded-xl border text-xs font-semibold text-center tracking-wide transition-all ${
                          selectedTime === slot
                            ? "bg-accent-blue border-transparent text-white shadow-md shadow-accent-blue/15 scale-[1.01]"
                            : "bg-white/40 border-black/10 text-text-muted hover:bg-white/80 hover:text-charcoal"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Intake Details */}
              {selectedDate && selectedTime && (
                <div className="space-y-5 transition-all duration-300 animate-fadeIn pt-4 border-t border-border-soft">
                  <h3 className="text-base font-[family-name:var(--font-inter)] font-semibold text-charcoal flex items-center gap-2">
                    <span className="w-5 h-5 rounded-lg bg-accent-blue/15 text-accent-blue flex items-center justify-center text-xs">3</span>
                    Intake Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="space-y-1">
                      <label htmlFor="user-name" className="text-[10px] text-text-muted font-semibold uppercase tracking-wider flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-accent-blue" /> Name
                      </label>
                      <input
                        type="text"
                        id="user-name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-cream/80 border border-black/10 rounded-xl px-4 py-2.5 text-sm text-charcoal focus:outline-none focus:border-accent-blue"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="user-email" className="text-[10px] text-text-muted font-semibold uppercase tracking-wider flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-accent-blue" /> Email
                      </label>
                      <input
                        type="email"
                        id="user-email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-cream/80 border border-black/10 rounded-xl px-4 py-2.5 text-sm text-charcoal focus:outline-none focus:border-accent-blue"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="user-org" className="text-[10px] text-text-muted font-semibold uppercase tracking-wider flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 text-accent-blue" /> Organization
                      </label>
                      <input
                        type="text"
                        id="user-org"
                        value={formState.org}
                        onChange={(e) => setFormState({ ...formState, org: e.target.value })}
                        placeholder="Acme Systems Inc."
                        className="w-full bg-cream/80 border border-black/10 rounded-xl px-4 py-2.5 text-sm text-charcoal focus:outline-none focus:border-accent-blue"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="user-details" className="text-[10px] text-text-muted font-semibold uppercase tracking-wider">Brief Project Overview</label>
                    <textarea
                      id="user-details"
                      rows={3}
                      required
                      value={formState.details}
                      onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                      placeholder="Help us prepare by describing your goals, tech stack, and general constraints..."
                      className="w-full bg-cream/80 border border-black/10 rounded-xl px-4 py-2.5 text-sm text-charcoal focus:outline-none focus:border-accent-blue resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-accent-blue hover:bg-accent-blue-hover text-white font-bold text-sm tracking-wide hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2"
                  >
                    Confirm Session Scheduler
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
