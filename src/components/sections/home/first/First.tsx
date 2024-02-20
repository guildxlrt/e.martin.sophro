import Styles from "./First.module.scss";

export default function HomeFirst() {
  return (
    <section id="home-first" className="section has-text-centered is-large why">
      <h1 class="title">La Sophrologie : Pour quoi ?</h1>
      <div class="columns">
        <div
          className={`column is-half is-paddingless ${Styles.HomeFirstColumn}`}
        >
          <img
            src="/pictures/home/problems.webp"
            alt="problems"
            className={Styles.HomeFirstImage}
          />
        </div>
        <div
          className={`is-half ${Styles.HomeFirstColumn} ${Styles.HomeFirstText}`}
        >
          <span class="subtitle is-4">
            Les situations de la vie quotidienne peuvent générer stress,
            <br />
            anxiété, troubles du sommeil, nervosité, angoisses, altérer la
            confiance en soi...
          </span>
          <span class="subtitle is-4">
            ...et l'on peut se sentir submergé !
          </span>
        </div>
      </div>
      <div class="container" style="padding: 88px 0px;">
        {/* @!component('../components/gotolink.edge', {
                path: '#sophro-fields',
                htmlText: '',
                color: 'info'
            })*/}
      </div>
    </section>
  );
}
