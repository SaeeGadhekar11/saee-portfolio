import React from "react";

const base = (children, props={}) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width={props.size || 20} height={props.size || 20} aria-hidden="true">{children}</svg>
);
export const ArrowUpRight = p => base(<><path d="M7 17 17 7"/><path d="M7 7h10v10"/></>,p);
export const Github = p => base(<><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.1 5.1 0 0 0 19.2.8S18 0.4 15 2.4a13.4 13.4 0 0 0-6 0C6 0.4 4.8.8 4.8.8A5.1 5.1 0 0 0 4.7 4 5.5 5.5 0 0 0 3.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4"/></>,p);
export const Linkedin = p => base(<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,p);
export const Mail = p => base(<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,p);
export const MapPin = p => base(<><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,p);
export const Download = p => base(<><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,p);
export const Code2 = p => base(<><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></>,p);
export const Database = p => base(<><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/></>,p);
export const Server = p => base(<><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7h.01M7 16h.01"/></>,p);
export const BrainCircuit = p => base(<><path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-3 3 3 3 0 0 0 3 3v2a3 3 0 0 0 3 3h2V3Z"/><path d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 3 3 3 3 0 0 1-3 3v2a3 3 0 0 1-3 3h-2V3Z"/><path d="M9 8h6M9 12h6M9 16h6"/></>,p);
export const Menu = p => base(<><path d="M4 6h16M4 12h16M4 18h16"/></>,p);
export const X = p => base(<><path d="m6 6 12 12M18 6 6 18"/></>,p);
export const GraduationCap = p => base(<><path d="m2 10 10-5 10 5-10 5-10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/><path d="M22 10v6"/></>,p);
export const Award = p => base(<><circle cx="12" cy="8" r="5"/><path d="m8.5 12-1 9 4.5-2.5 4.5 2.5-1-9"/></>,p);
export const ChevronDown = p => base(<path d="m6 9 6 6 6-6"/>,p);
