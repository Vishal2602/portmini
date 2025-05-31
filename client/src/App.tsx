import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PageTransition from "@/components/PageTransition";
import Home from "@/pages/home";
import Portfolio from "@/pages/portfolio";
import F1MonkProject from "@/pages/projects/f1-monk";
import AdaptivePromptProject from "@/pages/projects/adaptive-prompt";
import ThePigeonAppProject from "@/pages/projects/the-pigeon-app";
import HaloMeditationProject from "@/pages/projects/halo-meditation";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <PageTransition>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/resume" component={Portfolio} />
        <Route path="/projects/f1-monk" component={F1MonkProject} />
        <Route path="/projects/adaptive-prompt" component={AdaptivePromptProject} />
        <Route path="/projects/the-pigeon-app" component={ThePigeonAppProject} />
        <Route path="/projects/halo-meditation" component={HaloMeditationProject} />
        <Route component={NotFound} />
      </Switch>
    </PageTransition>
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
