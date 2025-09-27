import { useState, useCallback, useEffect } from 'react';

export function usePremiumPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const openPopup = useCallback(() => {
    if (!hasShown) {
      setShowPopup(true);
      setHasShown(true);
    }
  }, [hasShown]);

  const closePopup = useCallback(() => {
    setShowPopup(false);
  }, []);

  // Persist hasShown state
  useEffect(() => {
    const shown = localStorage.getItem('premium_popup_shown');
    if (shown) {
      setHasShown(true);
    }
  }, []);

  useEffect(() => {
    if (hasShown) {
      localStorage.setItem('premium_popup_shown', 'true');
    }
  }, [hasShown]);

  return {
    showPopup,
    openPopup,
    closePopup
  };
}