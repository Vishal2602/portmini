import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Portfolio from "@/pages/portfolio";
import F1MonkProject from "@/pages/projects/f1-monk";
import AdaptivePromptProject from "@/pages/projects/adaptive-prompt";
import HealthcareAIProject from "@/pages/projects/healthcare-ai";
import VRLuxuryBrandProject from "@/pages/projects/vr-luxury-brand";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/resume" component={Portfolio} />
      <Route path="/projects/f1-monk" component={F1MonkProject} />
      <Route path="/projects/adaptive-prompt" component={AdaptivePromptProject} />
      <Route path="/projects/healthcare-ai" component={HealthcareAIProject} />
      <Route path="/projects/vr-luxury-brand" component={VRLuxuryBrandProject} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
