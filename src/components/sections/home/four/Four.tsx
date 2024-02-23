import Styles from "./Four.module.scss";

export default function ClientsComments() {
  return (
    <section
      id="home-four"
      className={`hero is-halfheight is-secondary ${Styles.HomeFour}`}
    >
      <div class="hero-header">
        <h2 class="title is-3 has-text-centered">Mon accompagnement</h2>
        <a href="{{route('about')}}">
          {/* @!component('../components/portait.edge') */}
        </a>
      </div>
      <div class="hero-body" style="flex-direction:column;">
        <div class="container">
          <p class="subtitle is-5">
            Spécialisée dans les troubles de l'émotion et de l'anxiété,
            l'accompagnement que je propose permet de trouver une harmonie en
            soi,
            <strong>d'être acteur de son mieux-être</strong> au quotidien,
            d'être capable de <strong>calmer les montées d'angoisses</strong>,
            de générer des sensations positives et prendre ou{" "}
            <strong>reprendre confiance en vous</strong> et en l'avenir.
          </p>
          <p class="subtitle is-5">
            Je vous accompagne à développer vos ressources positives, vos
            capacités, à prendre conscience de vous-même, de vos émotions, de
            vos sensations et d'y mettre les mots.
          </p>
          <p class="subtitle is-5">
            A travers la relaxation, des mouvements doux, l'imagerie mentale
            positive et des exercices de respiration consciente vous pourrez
            apprivoiser vos émotions avec authenticité pour les savourer, les
            traverser dans un mouvement naturel et sain afin de vivre un
            quotidien plus apaisé.
          </p>
        </div>
      </div>
      <div class="hero-footer">
        <h2 class="title is-3 has-text-centered">
          {/* @!component('../components/gotolink.edge', {
                path: route('sittings'),
                htmlText: 'Consulter',
                color: 'link',
                chevron: false
            }) */}
        </h2>
      </div>
    </section>
  );
}
