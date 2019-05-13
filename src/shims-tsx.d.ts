import Vue, { VNode } from 'vue';
import 'jquery';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }

  // =====================[ JQuery Extends ]============================
  interface JQuery<TElement = HTMLElement> extends Iterable<TElement> {
    parallax(statement?: string): JQuery;
    flexslider(arg0: {
      animation: string;
      controlNav: boolean;
      easing: string;
      slideshowSpeed: number;
      animationSpeed: number;
      pauseOnAction: boolean;
      touch: boolean;
      keyboard: boolean;
      after: () => void;
      before: () => void;
    }): any;
  }

  // =====================[ JQuery Extends ]============================
}

export function Action(targetOrParams: any, key: any, descriptor: any): any;
export function Module(modOrOpt: any): any;
export function Mutation(target: any, key: any, descriptor: any): void;
export function MutationAction(paramsOrTarget: any, key: any, descriptor: any): any;
export class VuexModule {
  public actions: any;
  public mutations: any;
  public state: any;
  public getters: any;
  public namespaced: any;
  public modules: any;
  constructor(module: any);
}
export function getModule(moduleClass: any, store: any): any;
