/** Curriculum Terminal: persistent technical folio rail, graphite base, Route Yellow source cues, accessible command search. */
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "wouter";
import { BookOpenText, ChevronRight, Command, FileSearch, Home, Menu, Search, ShieldCheck } from "lucide-react";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandShortcut } from "@/components/ui/command";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarSeparator, SidebarTrigger } from "@/components/ui/sidebar";
import { assets, searchIndex, sitePages } from "@/data/siteData";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const current = useMemo(() => sitePages.find((page) => page.path === location) ?? sitePages[0], [location]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const selectRoute = (path: string) => { setLocation(path); setSearchOpen(false); window.setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 20); };

  return <SidebarProvider defaultOpen>
    <Sidebar collapsible="icon" className="site-sidebar">
      <div className="sidebar-panel">
        <SidebarHeader className="sidebar-header">
          <Link href="/" className="side-brand" aria-label="AECCHEATSHEET home">
            <img src={assets.mark} alt="" />
            <span className="brand-copy"><b>AEC<i>//</i>CSE</b><small>CHEATSHEET</small></span>
          </Link>
          <div className="sidebar-datum"><span>FIELD MANUAL</span><b>v2.0 / 2026</b></div>
        </SidebarHeader>
        <SidebarSeparator className="side-rule" />
        <SidebarContent className="sidebar-content">
          <SidebarGroup>
            <SidebarGroupLabel className="side-group-label">NAVIGATION / 08 ROUTES</SidebarGroupLabel>
            <SidebarMenu className="side-menu">
              {sitePages.map((page) => <SidebarMenuItem key={page.id}>
                <SidebarMenuButton asChild isActive={current.id === page.id} tooltip={page.label} className="side-link">
                  <Link href={page.path}><span className="side-no">{page.no}</span><span className="side-link-copy"><b>{page.label}</b><small>{page.micro}</small></span><ChevronRight className="side-chevron" /></Link>
                </SidebarMenuButton>
              </SidebarMenuItem>)}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="sidebar-footer">
          <button type="button" className="side-search" onClick={() => setSearchOpen(true)}><Search size={15} /><span>SEARCH GUIDE</span><kbd>⌘K</kbd></button>
          <div className="side-status"><ShieldCheck size={15} /><span><b>CITED & DATED</b><small>27 AUG 2026 · IST</small></span></div>
        </SidebarFooter>
      </div>
    </Sidebar>
    <SidebarInset className="site-inset">
      <header className="site-topbar">
        <SidebarTrigger className="sidebar-trigger" />
        <div className="topbar-route"><span>{current.no}</span><b>{current.label}</b><small>{current.micro}</small></div>
        <button type="button" className="top-search" onClick={() => setSearchOpen(true)}><Search size={16} /><span>SEARCH</span><kbd>⌘K</kbd></button>
      </header>
      <div className="mobile-signature"><img src={assets.mark} alt="" /><span>AEC<i>//</i>CSE <b>CHEATSHEET</b></span><button onClick={() => setSearchOpen(true)} aria-label="Search the guide"><Search size={17} /></button></div>
      {children}
    </SidebarInset>
    <CommandDialog open={searchOpen} onOpenChange={setSearchOpen} title="Search AECCHEATSHEET" description="Search guide routes and student topics" className="search-dialog">
      <CommandInput placeholder="Search links, C programming, hostel, faculty…" />
      <CommandList>
        <CommandEmpty>No route found. Try a course, portal, person, or topic.</CommandEmpty>
        <CommandGroup heading="GUIDE ROUTES">
          {searchIndex.map((item) => <CommandItem key={`${item.title}${item.path}`} value={`${item.title} ${item.detail} ${item.terms}`} onSelect={() => selectRoute(item.path)}>
            <FileSearch /><span className="command-copy"><b>{item.title}</b><small>{item.detail}</small></span><CommandShortcut>{sitePages.find((page) => page.path === item.path)?.no ?? "GO"}</CommandShortcut>
          </CommandItem>)}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  </SidebarProvider>;
}
