import Styles from "./Three.module.scss";

export default function HomeThree() {
  return (
    <section id="home-three" className={`section has-text-centered is-large`}>
      <h2 class={`title ${Styles.HomeThreeTitle}`}>
        La Sophrologie : C'est pour qui ?
      </h2>
      <div class="container">
        <div className={`columns ${Styles.HomeColumns}`}>
          <span
            className={`subtitle column is-one-third is-marginless ${Styles.HomeColumn}`}
          >
            Toutes les personnes désireuses de mieux se connaître et d’avancer
            vers leurs objectifs, quels qu’ils soient.
          </span>
          <span
            className={`subtitle column is-one-third is-marginless ${Styles.HomeColumn}`}
          >
            Les personnes souhaitant améliorer leur qualité de vie, se relaxer,
            prendre un moment pour elles.
          </span>
          <span
            className={`subtitle column is-one-third is-marginless ${Styles.HomeColumn}`}
          >
            Tous ceux qui rencontrent un moment difficile et qui souhaitent
            avancer plus sereinement et en confiance.
          </span>
        </div>
        <div class="container" style="padding: 0px;">
          {/* @!component('../components/gotolink.edge', {
                path: '#presentation',
                htmlText: '',
                color: 'info'
            }) */}
        </div>
      </div>
    </section>
  );
}
