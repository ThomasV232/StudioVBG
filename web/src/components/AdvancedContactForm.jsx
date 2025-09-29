import { useMemo, useState } from 'react';

const defaultData = {
  motif: 'contact',
  clientType: 'entreprise',
  companyName: '',
  siren: '',
  website: '',
  role: '',
  associationName: '',
  rna: '',
  associationRole: '',
  projectOccasion: '',
  fullName: '',
  email: '',
  phone: '',
  category: 'Vidéo d’entreprise',
  subtype: '',
  objective: 'Notoriété',
  brief: '',
  references: '',
  locations: '',
  dates: '',
  constraints: '',
  languages: 'Français',
  usage: [],
  pack: 'Journée',
  budget: '950-1500 €',
  deadline: '',
  options: [],
  files: null,
  consent: false,
  newsletter: false,
};

const usageOptions = [
  'Réseaux sociaux',
  'Site web',
  'Ads',
  'Événement',
  'TV / DOOH',
];

const optionExtras = [
  'Drone 4K',
  'Motion design avancé',
  'Voix-off professionnelle',
  'Sous-titres multilingues',
  'Formats supplémentaires 4:5',
  'Multi-caméra',
];

const subtypeMap = {
  'Vidéo d’entreprise': ['Film manifeste', 'Témoignage client', 'Portrait dirigeant', 'Pitch produit'],
  'Vidéos événementielles': ['Teaser', 'Aftermovie', 'Captation talk', 'Live multi-cam'],
  'Vidéo immobilière': ['Biens résidentiels', 'Biens tertiaires', 'Visite 360°', 'Programme neuf'],
  'Film de mariage': ['Préparatifs', 'Cérémonie', 'Soirée', 'Teaser social'],
  'Contenus social-first': ['UGC premium', 'Série verticale', 'Ads 6s', 'Motion IA'],
  'Offre Express': ['Lancement produit', 'Annonce interne', 'Couverture presse', 'Interview day'],
};

function Stepper({ current, total }) {
  const percentage = Math.round(((current + 1) / total) * 100);
  return (
    <div className="form-progress" aria-label={`Progression ${percentage} pour cent`}>
      <div className="form-progress__bar" style={{ width: `${percentage}%` }} />
      <span>{percentage}%</span>
    </div>
  );
}

function AdvancedContactForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(defaultData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const steps = useMemo(
    () => [
      {
        id: 'profil',
        title: 'Votre profil',
        description: 'Identifions votre structure pour adapter l’accompagnement.',
      },
      {
        id: 'projet',
        title: 'Votre projet',
        description: 'Précisons l’usage, les objectifs et les inspirations.',
      },
      {
        id: 'logistique',
        title: 'Logistique',
        description: 'Cadrez les lieux, dates et contraintes techniques.',
      },
      {
        id: 'validation',
        title: 'Validation',
        description: 'Choisissez votre pack et validez le récapitulatif.',
      },
    ],
    []
  );

  const totalSteps = steps.length;

  const handleChange = (field, value) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const toggleArrayValue = (field, value) => {
    setData((prev) => {
      const current = prev[field];
      const exists = current.includes(value);
      return {
        ...prev,
        [field]: exists ? current.filter((item) => item !== value) : [...current, value],
      };
    });
  };

  const validateStep = (index) => {
    const newErrors = {};
    if (index === 0) {
      if (!data.fullName) newErrors.fullName = 'Merci d’indiquer votre nom et prénom.';
      if (!data.email) newErrors.email = 'Veuillez renseigner un email professionnel.';
      if (data.clientType === 'entreprise' && !data.companyName)
        newErrors.companyName = 'La raison sociale est requise.';
      if (data.clientType === 'association' && !data.associationName)
        newErrors.associationName = 'Merci d’indiquer le nom de l’association.';
      if (data.clientType === 'particulier' && !data.projectOccasion)
        newErrors.projectOccasion = 'Précisez l’occasion pour que nous adaptions la captation.';
    }
    if (index === 1) {
      if (!data.category) newErrors.category = 'Choisissez une catégorie de projet.';
      if (!data.subtype) newErrors.subtype = 'Sélectionnez un sous-type.';
      if (data.motif === 'devis' && !data.brief)
        newErrors.brief = 'Un brief est nécessaire pour établir votre devis.';
    }
    if (index === 2) {
      if (!data.locations) newErrors.locations = 'Ajoutez les lieux pressentis.';
      const requireDates = ['Vidéos événementielles', 'Film de mariage'].includes(data.category);
      if (requireDates && !data.dates)
        newErrors.dates = 'Indiquez les dates clés afin de bloquer l’équipe.';
      if (!data.usage.length) newErrors.usage = 'Sélectionnez au moins un usage cible.';
    }
    if (index === 3) {
      if (!data.consent) newErrors.consent = 'Le consentement RGPD est requis.';
      if (data.motif === 'devis' && !data.deadline)
        newErrors.deadline = 'Merci d’indiquer votre deadline souhaitée.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, totalSteps - 1));
    }
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateStep(step)) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    setData(defaultData);
    setStep(0);
    setSubmitted(false);
  };

  const subtypeOptions = subtypeMap[data.category] || [];
  const summaryItems = [
    { label: 'Motif', value: data.motif === 'devis' ? 'Demande de devis' : 'Prise de contact' },
    { label: 'Type de client', value: data.clientType },
    { label: 'Contact', value: `${data.fullName} — ${data.email}${data.phone ? ` — ${data.phone}` : ''}` },
    { label: 'Projet', value: `${data.category} · ${data.subtype}` },
    { label: 'Objectif', value: data.objective },
    { label: 'Usages', value: data.usage.join(', ') },
    { label: 'Dates', value: data.dates || 'À confirmer' },
  ];

  return (
    <form className="advanced-form" onSubmit={handleSubmit} noValidate>
      <Stepper current={step} total={totalSteps} />
      <div className="advanced-form__steps" aria-live="polite">
        {submitted ? (
          <div className="advanced-form__confirmation" role="status">
            <h3>{data.motif === 'devis' ? 'Merci, votre demande de devis est bien reçue.' : 'Merci, nous revenons vers vous sous 24 h.'}</h3>
            <p>
              Nous vous envoyons un récapitulatif à {data.email}. Vous pouvez réserver un créneau visio immédiat via notre agenda
              en ligne.
            </p>
            <button type="button" className="btn btn--ghost" onClick={resetForm}>
              Remplir un nouveau formulaire
            </button>
          </div>
        ) : (
          <>
            <header>
              <h3>{steps[step].title}</h3>
              <p>{steps[step].description}</p>
            </header>
            {step === 0 && (
              <div className="advanced-form__grid">
                <div className="field-group">
                  <label htmlFor="motif">Motif de votre demande *</label>
                  <select
                    id="motif"
                    value={data.motif}
                    onChange={(event) => handleChange('motif', event.target.value)}
                  >
                    <option value="contact">Prise de contact</option>
                    <option value="devis">Demande de devis</option>
                  </select>
                </div>
                <fieldset className="field-group">
                  <legend>Type de client *</legend>
                  <div className="pill-group" role="radiogroup" aria-label="Type de client">
                    {['entreprise', 'association', 'particulier'].map((type) => (
                      <label key={type} className={data.clientType === type ? 'is-selected' : ''}>
                        <input
                          type="radio"
                          name="clientType"
                          value={type}
                          checked={data.clientType === type}
                          onChange={(event) => handleChange('clientType', event.target.value)}
                        />
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <div className="field-group">
                  <label htmlFor="fullName">Nom & prénom *</label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Ex. Claire Martin"
                    value={data.fullName}
                    onChange={(event) => handleChange('fullName', event.target.value)}
                    aria-invalid={errors.fullName ? 'true' : 'false'}
                  />
                  {errors.fullName && <span className="field-error">{errors.fullName}</span>}
                </div>
                <div className="field-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Ex. claire@entreprise.fr"
                    value={data.email}
                    onChange={(event) => handleChange('email', event.target.value)}
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
                <div className="field-group">
                  <label htmlFor="phone">Téléphone (optionnel)</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Ex. +33 6 12 34 56 78"
                    value={data.phone}
                    onChange={(event) => handleChange('phone', event.target.value)}
                  />
                </div>
                {data.clientType === 'entreprise' && (
                  <>
                    <div className="field-group">
                      <label htmlFor="companyName">Raison sociale *</label>
                      <input
                        id="companyName"
                        type="text"
                        placeholder="Ex. NovaTech SAS"
                        value={data.companyName}
                        onChange={(event) => handleChange('companyName', event.target.value)}
                        aria-invalid={errors.companyName ? 'true' : 'false'}
                      />
                      {errors.companyName && <span className="field-error">{errors.companyName}</span>}
                    </div>
                    <div className="field-group">
                      <label htmlFor="siren">SIREN / SIRET (optionnel)</label>
                      <input
                        id="siren"
                        type="text"
                        placeholder="Ex. 123 456 789"
                        value={data.siren}
                        onChange={(event) => handleChange('siren', event.target.value)}
                      />
                    </div>
                    <div className="field-group">
                      <label htmlFor="website">Site web (optionnel)</label>
                      <input
                        id="website"
                        type="url"
                        placeholder="Ex. https://votre-site.fr"
                        value={data.website}
                        onChange={(event) => handleChange('website', event.target.value)}
                      />
                    </div>
                    <div className="field-group">
                      <label htmlFor="role">Fonction (optionnel)</label>
                      <input
                        id="role"
                        type="text"
                        placeholder="Ex. Responsable marketing"
                        value={data.role}
                        onChange={(event) => handleChange('role', event.target.value)}
                      />
                    </div>
                  </>
                )}
                {data.clientType === 'association' && (
                  <>
                    <div className="field-group">
                      <label htmlFor="associationName">Nom de l’association *</label>
                      <input
                        id="associationName"
                        type="text"
                        placeholder="Ex. Association Culture&Co"
                        value={data.associationName}
                        onChange={(event) => handleChange('associationName', event.target.value)}
                        aria-invalid={errors.associationName ? 'true' : 'false'}
                      />
                      {errors.associationName && <span className="field-error">{errors.associationName}</span>}
                    </div>
                    <div className="field-group">
                      <label htmlFor="rna">N° RNA (optionnel)</label>
                      <input
                        id="rna"
                        type="text"
                        placeholder="Ex. W751234567"
                        value={data.rna}
                        onChange={(event) => handleChange('rna', event.target.value)}
                      />
                    </div>
                    <div className="field-group">
                      <label htmlFor="associationRole">Votre rôle (optionnel)</label>
                      <input
                        id="associationRole"
                        type="text"
                        placeholder="Ex. Responsable communication"
                        value={data.associationRole}
                        onChange={(event) => handleChange('associationRole', event.target.value)}
                      />
                    </div>
                  </>
                )}
                {data.clientType === 'particulier' && (
                  <div className="field-group">
                    <label htmlFor="projectOccasion">Projet / occasion *</label>
                    <input
                      id="projectOccasion"
                      type="text"
                      placeholder="Ex. Mariage automne 2026"
                      value={data.projectOccasion}
                      onChange={(event) => handleChange('projectOccasion', event.target.value)}
                      aria-invalid={errors.projectOccasion ? 'true' : 'false'}
                    />
                    {errors.projectOccasion && <span className="field-error">{errors.projectOccasion}</span>}
                  </div>
                )}
              </div>
            )}

            {step === 1 && (
              <div className="advanced-form__grid">
                <div className="field-group">
                  <label htmlFor="category">Catégorie *</label>
                  <select
                    id="category"
                    value={data.category}
                    onChange={(event) => {
                      const nextCategory = event.target.value;
                      handleChange('category', nextCategory);
                      handleChange('subtype', '');
                    }}
                    aria-invalid={errors.category ? 'true' : 'false'}
                  >
                    {Object.keys(subtypeMap).map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  {errors.category && <span className="field-error">{errors.category}</span>}
                </div>
                <div className="field-group">
                  <label htmlFor="subtype">Sous-type *</label>
                  <select
                    id="subtype"
                    value={data.subtype}
                    onChange={(event) => handleChange('subtype', event.target.value)}
                    aria-invalid={errors.subtype ? 'true' : 'false'}
                  >
                    <option value="" disabled>
                      Sélectionnez une option
                    </option>
                    {subtypeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.subtype && <span className="field-error">{errors.subtype}</span>}
                </div>
                <div className="field-group">
                  <label htmlFor="objective">Objectif principal</label>
                  <select
                    id="objective"
                    value={data.objective}
                    onChange={(event) => handleChange('objective', event.target.value)}
                  >
                    {['Notoriété', 'Conversion', 'Événement', 'Recrutement', 'Immobilier', 'Souvenir', 'Autre'].map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field-group field-group--full">
                  <label htmlFor="brief">Brief (requis si devis)</label>
                  <textarea
                    id="brief"
                    rows={4}
                    placeholder="Contexte, messages clés, livrables attendus..."
                    value={data.brief}
                    onChange={(event) => handleChange('brief', event.target.value)}
                    aria-invalid={errors.brief ? 'true' : 'false'}
                  />
                  {errors.brief && <span className="field-error">{errors.brief}</span>}
                </div>
                <div className="field-group field-group--full">
                  <label htmlFor="references">Références (liens)</label>
                  <textarea
                    id="references"
                    rows={3}
                    placeholder="Collez vos inspirations (URLs)"
                    value={data.references}
                    onChange={(event) => handleChange('references', event.target.value)}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="advanced-form__grid">
                <div className="field-group field-group--full">
                  <label htmlFor="locations">Lieux pressentis *</label>
                  <textarea
                    id="locations"
                    rows={3}
                    placeholder="Ex. Siège Paris + boutique Lyon"
                    value={data.locations}
                    onChange={(event) => handleChange('locations', event.target.value)}
                    aria-invalid={errors.locations ? 'true' : 'false'}
                  />
                  {errors.locations && <span className="field-error">{errors.locations}</span>}
                </div>
                <div className="field-group">
                  <label htmlFor="dates">Dates clés {['Vidéos événementielles', 'Film de mariage'].includes(data.category) ? '*' : ''}</label>
                  <input
                    id="dates"
                    type="text"
                    placeholder="Ex. 12-13 juin 2025"
                    value={data.dates}
                    onChange={(event) => handleChange('dates', event.target.value)}
                    aria-invalid={errors.dates ? 'true' : 'false'}
                  />
                  {errors.dates && <span className="field-error">{errors.dates}</span>}
                </div>
                <div className="field-group">
                  <label htmlFor="constraints">Contraintes & autorisations</label>
                  <textarea
                    id="constraints"
                    rows={3}
                    placeholder="Ex. captation drone, accès sécurité, badges..."
                    value={data.constraints}
                    onChange={(event) => handleChange('constraints', event.target.value)}
                  />
                </div>
                <div className="field-group">
                  <label htmlFor="languages">Langue(s) & sous-titres</label>
                  <input
                    id="languages"
                    type="text"
                    placeholder="Ex. Français + sous-titres anglais"
                    value={data.languages}
                    onChange={(event) => handleChange('languages', event.target.value)}
                  />
                </div>
                <fieldset className="field-group field-group--full">
                  <legend>Usage prévu *</legend>
                  <div className="pill-group" role="group" aria-label="Usage prévu">
                    {usageOptions.map((option) => (
                      <label key={option} className={data.usage.includes(option) ? 'is-selected' : ''}>
                        <input
                          type="checkbox"
                          name="usage"
                          value={option}
                          checked={data.usage.includes(option)}
                          onChange={() => toggleArrayValue('usage', option)}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                  {errors.usage && <span className="field-error">{errors.usage}</span>}
                </fieldset>
              </div>
            )}

            {step === 3 && (
              <div className="advanced-form__grid">
                {data.motif === 'devis' && (
                  <>
                    <div className="field-group">
                      <label htmlFor="pack">Pack souhaité</label>
                      <select
                        id="pack"
                        value={data.pack}
                        onChange={(event) => handleChange('pack', event.target.value)}
                      >
                        <option value="Journée">Journée — à partir de 950 € HT</option>
                        <option value="Weekend">Weekend (2 jours) — à partir de 1 500 € HT</option>
                        <option value="Sur Demande">Sur demande — sur devis personnalisé</option>
                      </select>
                    </div>
                    <div className="field-group">
                      <label htmlFor="budget">Budget estimé</label>
                      <select
                        id="budget"
                        value={data.budget}
                        onChange={(event) => handleChange('budget', event.target.value)}
                      >
                        <option value="950-1500 €">950 – 1 500 €</option>
                        <option value="1500-2600 €">1 500 – 2 600 €</option>
                        <option value="2600-5000 €">2 600 – 5 000 €</option>
                        <option value="5000+ €">5 000 € et +</option>
                      </select>
                    </div>
                    <div className="field-group">
                      <label htmlFor="deadline">Deadline souhaitée *</label>
                      <input
                        id="deadline"
                        type="text"
                        placeholder="Ex. Livraison avant le 15/09/2025"
                        value={data.deadline}
                        onChange={(event) => handleChange('deadline', event.target.value)}
                        aria-invalid={errors.deadline ? 'true' : 'false'}
                      />
                      {errors.deadline && <span className="field-error">{errors.deadline}</span>}
                    </div>
                    <fieldset className="field-group field-group--full">
                      <legend>Options</legend>
                      <div className="pill-group" role="group" aria-label="Options supplémentaires">
                        {optionExtras.map((option) => (
                          <label key={option} className={data.options.includes(option) ? 'is-selected' : ''}>
                            <input
                              type="checkbox"
                              name="options"
                              value={option}
                              checked={data.options.includes(option)}
                              onChange={() => toggleArrayValue('options', option)}
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  </>
                )}
                <div className="field-group field-group--full">
                  <label htmlFor="files">Fichiers (brief, moodboard…)</label>
                  <input
                    id="files"
                    type="file"
                    accept=".pdf,.zip,.jpg,.png,.mp4,.mov"
                    onChange={(event) => handleChange('files', event.target.files?.[0] || null)}
                  />
                  <small>Glissez-déposez ou cliquez pour importer (max 200 Mo).</small>
                </div>
                <div className="field-group field-group--full">
                  <h4>Récapitulatif</h4>
                  <ul className="summary-list">
                    {summaryItems.map((item) => (
                      <li key={item.label}>
                        <strong>{item.label} :</strong> {item.value || '—'}
                      </li>
                    ))}
                    {data.motif === 'devis' && (
                      <li>
                        <strong>Pack souhaité :</strong> {data.pack} — Budget {data.budget}
                      </li>
                    )}
                  </ul>
                </div>
                <div className="field-group field-group--full">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      checked={data.consent}
                      onChange={(event) => handleChange('consent', event.target.checked)}
                    />
                    <span>
                      J’accepte que STUDIO VBG traite mes données pour répondre à ma demande (obligatoire).
                    </span>
                  </label>
                  {errors.consent && <span className="field-error">{errors.consent}</span>}
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      checked={data.newsletter}
                      onChange={(event) => handleChange('newsletter', event.target.checked)}
                    />
                    <span>Je souhaite recevoir les inspirations vidéo trimestrielles (optionnel).</span>
                  </label>
                </div>
              </div>
            )}

            <div className="advanced-form__actions">
              {step > 0 && (
                <button type="button" className="btn btn--ghost" onClick={handlePrev}>
                  Étape précédente
                </button>
              )}
              {step < totalSteps - 1 && (
                <button type="button" className="btn btn--primary" onClick={handleNext}>
                  Continuer
                </button>
              )}
              {step === totalSteps - 1 && (
                <button type="submit" className="btn btn--primary" disabled={loading}>
                  {loading ? 'Envoi en cours…' : 'Envoyer ma demande'}
                </button>
              )}
            </div>
            <p className="form-microcopy">
              Temps de réponse moyen : 24 h ouvrées. Vos données restent confidentielles et ne sont jamais revendues.
            </p>
          </>
        )}
      </div>
    </form>
  );
}

export default AdvancedContactForm;
