function Contact() {
  return (
    <div className="section">
      <header>
        <h1>Contact &amp; devis</h1>
        <p>
          Dites-nous comment nous pouvons vous aider. Ce formulaire guide votre brief en quatre étapes
          et nous permet de revenir vers vous sous 24h ouvrées.
        </p>
      </header>

      <form className="card" style={{ padding: '2.5rem' }}>
        <fieldset>
          <legend>Étape 1 : Motif &amp; profil</legend>
          <label>
            Motif
            <select name="motif" required defaultValue="">
              <option value="" disabled>
                Sélectionner
              </option>
              <option>Prise de contact</option>
              <option>Demande de devis</option>
            </select>
          </label>
          <label>
            Type de client
            <select name="type-client" required defaultValue="">
              <option value="" disabled>
                Sélectionner
              </option>
              <option>Entreprise</option>
              <option>Association</option>
              <option>Particulier</option>
            </select>
          </label>
          <label>
            Nom complet
            <input name="nom" type="text" required placeholder="Votre nom" />
          </label>
          <label>
            Email professionnel
            <input name="email" type="email" required placeholder="prenom@entreprise.com" />
          </label>
          <label>
            Téléphone
            <input name="telephone" type="tel" placeholder="+33 6 12 34 56 78" />
          </label>
          <p className="badge">Vos données restent confidentielles.</p>
        </fieldset>

        <fieldset>
          <legend>Étape 2 : Projet</legend>
          <label>
            Catégorie
            <select name="categorie" required defaultValue="">
              <option value="" disabled>
                Choisir
              </option>
              <option>Entreprise</option>
              <option>Événementiel</option>
              <option>Immobilier</option>
              <option>Mariage</option>
              <option>Réseaux sociaux</option>
              <option>Motion Design / IA</option>
            </select>
          </label>
          <label>
            Sous-type souhaité
            <input
              name="sous-type"
              type="text"
              placeholder="Film corporate, aftermovie, série verticale..."
            />
          </label>
          <label>
            Objectif principal
            <select name="objectif" multiple>
              <option>Notoriété</option>
              <option>Conversion</option>
              <option>Événement</option>
              <option>Recrutement</option>
              <option>Immobilier</option>
              <option>Souvenir</option>
              <option>Autre</option>
            </select>
          </label>
          <label>
            Brief projet
            <textarea
              name="brief"
              placeholder="Contexte, messages clés, délais souhaités..."
              rows="4"
            ></textarea>
          </label>
          <label>
            Références
            <input
              name="references"
              type="url"
              placeholder="https://exemple.com/video-inspirante"
            />
          </label>
        </fieldset>

        <fieldset>
          <legend>Étape 3 : Logistique &amp; devis</legend>
          <label>
            Lieux de tournage
            <input name="lieux" type="text" placeholder="Lyon, Paris, distanciel..." />
          </label>
          <label>
            Dates ou période souhaitée
            <input name="dates" type="text" placeholder="Du 12 au 14 septembre" />
          </label>
          <label>
            Contraintes spécifiques
            <input
              name="contraintes"
              type="text"
              placeholder="Autorisations, drone, accès restreint..."
            />
          </label>
          <label>
            Langue(s) &amp; sous-titres
            <select name="langues" multiple>
              <option>Français</option>
              <option>Anglais</option>
              <option>Bilingue</option>
              <option>Autre</option>
            </select>
          </label>
          <label>
            Usages prévus
            <select name="usages" multiple>
              <option>Réseaux sociaux</option>
              <option>Site web</option>
              <option>Publicité en ligne</option>
              <option>Événement</option>
              <option>TV/DOOH</option>
              <option>Interne</option>
            </select>
          </label>
          <label>
            Pack souhaité
            <select name="pack">
              <option>Pack Journée</option>
              <option>Pack Weekend</option>
              <option>Pack Sur Demande</option>
            </select>
          </label>
          <label>
            Budget estimé
            <select name="budget">
              <option>&lt;2k€</option>
              <option>2-5k€</option>
              <option>5-10k€</option>
              <option>10-20k€</option>
              <option>&gt;20k€</option>
            </select>
          </label>
          <label>
            Deadline de livraison
            <input name="deadline" type="date" />
          </label>
          <label>
            Options
            <select name="options" multiple>
              <option>Drone</option>
              <option>Motion design</option>
              <option>Voix-off</option>
              <option>Sous-titres</option>
              <option>Ratios supplémentaires</option>
              <option>Multi-cam</option>
              <option>Diffusion live</option>
            </select>
          </label>
          <label>
            Fichiers
            <input name="fichiers" type="file" multiple />
          </label>
          <p className="badge">Formats acceptés : PDF, DOCX, PPTX, ZIP, JPG, MP4 (max 200 Mo).</p>
        </fieldset>

        <fieldset>
          <legend>Étape 4 : Récapitulatif</legend>
          <label>
            <input type="checkbox" required /> J'accepte le traitement de mes données selon la Politique
            de confidentialité.
          </label>
          <label>
            <input type="checkbox" /> Je souhaite recevoir des conseils vidéo.
          </label>
          <button type="submit" className="button">
            Envoyer ma demande
          </button>
        </fieldset>
      </form>

      <section aria-labelledby="processus">
        <h2 id="processus">Notre méthode</h2>
        <p>🔍 Brief → 📝 Pré-production → 🎥 Tournage → 🎬 Post-production &amp; Livraison.</p>
      </section>
    </div>
  );
}

export default Contact;
