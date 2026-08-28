import pkg from '../../package.json';

pkg.desktopName = pkg.desktopName || (pkg.name ? `${pkg.name}.desktop` : 'QGMail.desktop');

export default pkg;
