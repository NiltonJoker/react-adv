import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

type Route = {
  to: string;
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
};

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout"*/ "../01-lazyload/layout/LazyLayout"
    )
);


export const routes: Route[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    component: LazyLayout,
    name: "Lazy-1",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    component: NoLazy,
    name: "No-Lazy",
  },

];
