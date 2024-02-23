import Styles from "./Partners.module.scss";

export default function Partners() {
  return (
    <section
      id="partners"
      className={`section has-text-centered is-large ${Styles.Partners}`}
    >
      <div class="container">
        <h2 class="title">Ils m'ont fait confiance</h2>
        <div class="columns notification is-primary">
          <div class="column ">
            <img src="/logos/partners/equalis.webp" class="logo" alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
