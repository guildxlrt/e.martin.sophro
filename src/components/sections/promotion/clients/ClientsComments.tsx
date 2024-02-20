import Styles from "./ClientsComments.module.scss";

export default function ClientsComments() {
  return (
    <section
      id="clients-comments"
      className={`${Styles.ClientsComments} has-text-centered is-large`}
    >
      <h2 class="title">Témoignages</h2>
      <div class="columns is-multiline">
        {/* @!component('../components/home/client-comment.edge') */}
      </div>
    </section>
  );
}
