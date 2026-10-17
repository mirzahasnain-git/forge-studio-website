import React, { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { Mail, Send, Check, ArrowUpRight, Code2, Clapperboard, MessageCircle, Sparkles } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const FORMSPREE_ENDPOINT="https://formspree.io/f/myekebpn";
const options=[
 {icon:Code2,title:"Web & technology",desc:"Websites, landing pages, React interfaces"},
 {icon:Clapperboard,title:"Video & creative",desc:"Reels, podcast edits, product promos"},
 {icon:Sparkles,title:"A combination",desc:"A consistent digital + content presence"}
];
const ContactPage=()=>{
 const {toast}=useToast();
 const [form,setForm]=useState({name:"",email:"",company:"",service:"Web Development",message:""});
 const [sent,setSent]=useState(false); const [submitting,setSubmitting]=useState(false);
 const onSubmit=async e=>{
  e.preventDefault();setSubmitting(true);
  try{
   const response=await fetch(FORMSPREE_ENDPOINT,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:form.name,email:form.email,company:form.company||"Not provided",service:form.service,message:form.message,subject:`V-Graph Studio project enquiry from ${form.name}`})});
   const data=await response.json();if(!response.ok)throw new Error(data?.errors?.[0]?.message||"Something went wrong.");
   setSent(true);setForm({name:"",email:"",company:"",service:"Web Development",message:""});
  }catch(error){toast({title:"Submission failed",description:error.message||"Please try again or contact us by email."});}finally{setSubmitting(false);}
 };
 return <section className="relative overflow-hidden bg-grid noise min-h-[80vh]">
  <div className="hero-ambient hero-ambient-one"/><div className="hero-ambient hero-ambient-two"/>
  <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 relative z-10">
   <Reveal><div className="mb-12"><span className="section-kicker"><MessageCircle size={13}/> THE NEXT STEP / CONTACT</span><h1 className="font-display mt-6 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[.98]">Got a good idea?<br/><span className="hero-gradient-text">Let's give it shape.</span></h1><p className="mt-6 max-w-2xl text-neutral-400 text-lg md:text-xl leading-relaxed">Tell us what you want to build or create. Share the rough idea—even if it's not fully figured out yet.</p></div></Reveal>
   <div className="grid lg:grid-cols-[.82fr_1.18fr] gap-8 lg:gap-12 items-start">
    <Reveal><aside className="space-y-4">
     {options.map((o,i)=>{const Icon=o.icon;return <motion.div whileHover={{x:5}} key={o.title} className="contact-side-card flex gap-4 items-start"><span className="service-icon service-icon-small"><Icon size={17}/></span><div><h2 className="text-sm font-semibold">{o.title}</h2><p className="mt-1 text-xs leading-5 text-neutral-500">{o.desc}</p></div></motion.div>})}
     <div className="contact-side-card contact-email-panel"><span className="section-kicker"><Mail size={13}/> SAY HELLO</span><a href="mailto:mirzahasnainalam@gmail.com" className="mt-4 flex items-center justify-between gap-3 text-sm font-medium text-neutral-100 transition-colors hover:text-orange-200 break-all">mirzahasnainalam@gmail.com <ArrowUpRight size={16} className="shrink-0"/></a><p className="mt-3 text-xs text-neutral-500">Prefer email? Send a short note and we'll take it from there.</p></div>
     <div className="contact-response-note"><span className="contact-live-dot"/> Clear brief. Direct communication. Practical next steps.</div>
    </aside></Reveal>
    <Reveal delay={.12}><div className="contact-panel card-dark rounded-3xl p-6 md:p-9">
     {sent?<div className="flex flex-col items-center text-center py-16"><div className="w-14 h-14 rounded-full bg-orange-400/10 border border-orange-400/40 flex items-center justify-center"><Check className="text-orange-300" size={22}/></div><h3 className="font-display text-2xl font-semibold mt-5">Brief received.</h3><p className="text-neutral-400 mt-2 max-w-sm">Thanks for reaching out. We'll review your project and get back to you soon.</p><button type="button" onClick={()=>setSent(false)} className="btn-outline-soft mt-6 px-5 py-2.5 rounded-full text-sm">Send another</button></div>
     :<form onSubmit={onSubmit} className="space-y-5">
      <div className="flex items-center justify-between gap-4 mb-2"><div><p className="text-sm font-semibold text-white">Tell us about your project</p><p className="text-xs text-neutral-500 mt-1">A few details help us give you a useful response.</p></div><span className="text-[10px] uppercase tracking-[.18em] text-orange-300">Project brief ↗</span></div>
      <div className="grid sm:grid-cols-2 gap-4"><div><label htmlFor="contact-name" className="text-xs text-neutral-400">Your name</label><input id="contact-name" required type="text" name="name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="form-field mt-1.5 w-full" placeholder="Your name" autoComplete="name"/></div><div><label htmlFor="contact-company" className="text-xs text-neutral-400">Company <span className="text-neutral-600">(optional)</span></label><input id="contact-company" type="text" name="company" value={form.company} onChange={e=>setForm({...form,company:e.target.value})} className="form-field mt-1.5 w-full" placeholder="Your company" autoComplete="organization"/></div></div>
      <div><label htmlFor="contact-email" className="text-xs text-neutral-400">Email address</label><input id="contact-email" required type="email" name="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="form-field mt-1.5 w-full" placeholder="you@company.com" autoComplete="email"/></div>
      <div><label htmlFor="contact-service" className="text-xs text-neutral-400">What can we help with?</label><select id="contact-service" name="service" value={form.service} onChange={e=>setForm({...form,service:e.target.value})} className="form-field mt-1.5 w-full"><option>Web Development</option><option>Landing Page</option><option>Web Application</option><option>YouTube Editing</option><option>Shorts & Reels</option><option>Video Ads</option><option>Both</option></select></div>
      <div><label htmlFor="contact-message" className="text-xs text-neutral-400">Project details</label><textarea id="contact-message" required rows={5} name="message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="form-field mt-1.5 w-full resize-none" placeholder="Goals, timeline, features, references—anything that helps us understand your idea."/></div>
      <button type="submit" disabled={submitting} className="btn-primary-glow w-full rounded-full px-6 py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">{submitting?"Sending your brief…":"Send project brief"}{!submitting&&<Send size={14}/>}</button><p className="text-center text-[11px] text-neutral-600">Your project details are used only to respond to your enquiry.</p>
     </form>}
    </div></Reveal>
   </div>
  </div>
 </section>
};
export default ContactPage;
