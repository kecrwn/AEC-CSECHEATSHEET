/** AECCHEATSHEET: intentionally lean static application shell; all student resources live on one searchable page. */
import { Route, Switch } from "wouter";
import Home from "./pages/Home";

export default function App() {
  return <Switch><Route path="/" component={Home} /><Route component={Home} /></Switch>;
}
