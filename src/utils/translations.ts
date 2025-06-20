export const translateSpec = (key: string, t: (key: string) => string) => {
  switch (key) {
    case 'engine':
      return t('fleet.phantom.specs.engine');
    case 'power':
      return t('fleet.phantom.specs.power');
    case 'torque':
      return t('fleet.phantom.specs.torque');
    case 'acceleration':
      return t('fleet.phantom.specs.acceleration');
    case 'topSpeed':
      return t('fleet.phantom.specs.topSpeed');
    case 'seats':
      return t('fleet.phantom.specs.seats');
    case 'transmission':
      return t('fleet.phantom.specs.transmission');
    case 'drivetrain':
      return t('fleet.phantom.specs.drivetrain');
    default:
      return key;
  }
};