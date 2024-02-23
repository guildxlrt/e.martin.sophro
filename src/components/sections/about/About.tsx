import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import Styles from "./About.module.scss";

interface IProps {
  title: string;
  children: AstroComponentFactory;
}

export default function About({ title, children }: IProps) {
  return (
    <section className={`section ${Styles.About}`}>
      <article className={`container ${Styles.Article}`}>
        {/* @!component('../components/portait.edge') */}
        <h1 className={`title ${Styles.Title}`}>{title}</h1>
        <div className={`content ${Styles.Content}`}>
          <div class="container" style="padding-top: 32px;">
            {children}

            {/* @!component('../components/gotolink.edge', {
                    path: route('sittings'),
                    htmlText: 'Consulter',
                    color: 'link',
                    chevron: false
                }) */}
          </div>
        </div>
      </article>
    </section>
  );
}
