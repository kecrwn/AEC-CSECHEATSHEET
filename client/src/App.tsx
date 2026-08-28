/** Curriculum Terminal: routed eight-section AECCHEATSHEET handbook with a supplied persistent sidebar and global command search. */
import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import SiteLayout from "./components/SiteLayout";

const HomePage = lazy(() => import("./pages/GuidePages").then((module) => ({ default: module.HomePage })));
const LinksPage = lazy(() => import("./pages/GuidePages").then((module) => ({ default: module.LinksPage })));
const ResourcesPage = lazy(() => import("./pages/GuidePages").then((module) => ({ default: module.ResourcesPage })));
const CurriculumPage = lazy(() => import("./pages/GuidePages").then((module) => ({ default: module.CurriculumPage })));
const PlacementsPage = lazy(() => import("./pages/GuidePages").then((module) => ({ default: module.PlacementsPage })));
const FacultyPage = lazy(() => import("./pages/GuidePages").then((module) => ({ default: module.FacultyPage })));
const SocialPage = lazy(() => import("./pages/GuidePages").then((module) => ({ default: module.SocialPage })));
const ExtrasPage = lazy(() => import("./pages/GuidePages").then((module) => ({ default: module.ExtrasPage })));
const Handbook = lazy(() => import("./pages/Handbook"));

export default function App() {
  return <SiteLayout><Suspense fallback={<main className="route-loading">LOADING FIELD RECORD…</main>}><Switch>
    <Route path="/" component={HomePage} />
    <Route path="/links" component={LinksPage} />
    <Route path="/resources" component={ResourcesPage} />
    <Route path="/curriculum" component={CurriculumPage} />
    <Route path="/placements" component={PlacementsPage} />
    <Route path="/faculty" component={FacultyPage} />
    <Route path="/social" component={SocialPage} />
    <Route path="/extras" component={ExtrasPage} />
    <Route path="/handbook" component={Handbook} />
    <Route component={HomePage} />
  </Switch></Suspense></SiteLayout>;
}
