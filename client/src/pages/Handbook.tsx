/** Curriculum Terminal: print-only compilation of the eight routed handbook chapters with matching page covers. */
import { CurriculumPage, ExtrasPage, FacultyPage, HomePage, LinksPage, PlacementsPage, ResourcesPage, SocialPage } from "./GuidePages";

export default function Handbook() {
  return <div className="handbook-print"><HomePage /><LinksPage /><ResourcesPage /><CurriculumPage /><PlacementsPage /><FacultyPage /><SocialPage /><ExtrasPage /></div>;
}
