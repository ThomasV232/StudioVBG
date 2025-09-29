import { useState } from 'react';

function QuickContactForm() {
  const [status, setStatus] = useState('idle');
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFields((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!fields.name) newErrors.name = 'Merci d’indiquer vos nom et prénom.';
    if (!fields.email) newErrors.email = 'Un email valide est requis.';
    if (!fields.message) newErrors.message = 'Précisez votre besoin pour que nous répondions précisément.';
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  return (
    <form className="quick-form" onSubmit={handleSubmit} noValidate>
      <h3>Écrivez-nous en 2 minutes</h3>
      <p>Nous revenons vers vous sous 24 h ouvrées. Vous pouvez aussi réserver une visio sur /contact.</p>
      {status === 'success' ? (
        <div role="status" className="quick-form__success">
          Merci ! Votre message a bien été transmis. Consultez votre boîte mail pour confirmer votre adresse.
        </div>
      ) : (
        <>
          <div className="field-group">
            <label htmlFor="quick-name">Nom & prénom *</label>
            <input
              id="quick-name"
              type="text"
              value={fields.name}
              placeholder="Ex. Paul Richard"
              onChange={(event) => handleChange('name', event.target.value)}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </div>
          <div className="field-group">
            <label htmlFor="quick-email">Email *</label>
            <input
              id="quick-email"
              type="email"
              value={fields.email}
              placeholder="Ex. paul@entreprise.fr"
              onChange={(event) => handleChange('email', event.target.value)}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>
          <div className="field-group">
            <label htmlFor="quick-phone">Téléphone (optionnel)</label>
            <input
              id="quick-phone"
              type="tel"
              value={fields.phone}
              placeholder="Ex. +33 6 00 00 00 00"
              onChange={(event) => handleChange('phone', event.target.value)}
            />
          </div>
          <div className="field-group">
            <label htmlFor="quick-message">Message *</label>
            <textarea
              id="quick-message"
              rows={4}
              value={fields.message}
              placeholder="Expliquez vos objectifs et la date cible"
              onChange={(event) => handleChange('message', event.target.value)}
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            {errors.message && <span className="field-error">{errors.message}</span>}
          </div>
          <label className="checkbox">
            <input type="checkbox" required />
            <span>
              J’accepte que STUDIO VBG traite mes données pour répondre à ma demande. Consultez la politique sur /politique-de-confidentialite.
            </span>
          </label>
          <button type="submit" className="btn btn--primary" disabled={status === 'loading'}>
            {status === 'loading' ? 'Envoi…' : 'Envoyer'}
          </button>
        </>
      )}
    </form>
  );
}

export default QuickContactForm;
