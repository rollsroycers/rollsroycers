/**
 * مساعد للترجمة مع دعم namespace متعدد
 */
import { useTranslation } from 'next-i18next';

export function useMultipleNamespaces(namespaces: string[]) {
  const { t, i18n } = useTranslation(namespaces);
  
  return {
    t,
    i18n,
    // مساعد للوصول لمفاتيح namespace محدد
    tNamespace: (namespace: string, key: string) => {
      return t(`${namespace}:${key}`);
    }
  };
}

export function useNavigation() {
  return useTranslation('navigation');
}

export function useFooter() {
  return useTranslation('footer');
}

export function useServices() {
  return useTranslation('services');
}

export function useFleet() {
  return useTranslation('fleet');
}

export function usePages() {
  return useTranslation('pages');
}
