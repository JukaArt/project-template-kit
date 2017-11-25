import path from 'path'
import { DIST, SRC } from './paths';

export default {
  Root: SRC,
  Store: `${SRC}/scripts/store`,
  Sagas: `${SRC}/scripts/sagas`,
  Actions: `${SRC}/scripts/actions`,
  Reducers: `${SRC}/scripts/reducers`,
  Constants: `${SRC}/scripts/constants`,
  Selectors: `${SRC}/scripts/selectors`,

  Containers: `${SRC}/scripts/containers`,
  Components: `${SRC}/scripts/components`,
  Decorators: `${SRC}/scripts/decorators`,

  Page: `${SRC}/scripts/pages`,
  Modal: `${SRC}/scripts/modals`,
  Layout: `${SRC}/scripts/layouts`,

  Exp: `${SRC}/scripts/exp`,
  Api: `${SRC}/scripts/api`,
  Util: `${SRC}/scripts/utils`,
  Helpers: `${SRC}/scripts/helpers`,

  File: `${SRC}/files`,
  Locales: `${SRC}/scripts/locales`,
  Images: `${SRC}/files/images`,
  Tmpl: `${SRC}/templates`,
  Scripts: `${SRC}/scripts`,
  Data: `${SRC}/scripts/data`,
  Styles: `${SRC}/stylesheets`,
  Fonts: `${SRC}/stylesheets/fonts`,
  Mixin: `${SRC}/scripts/mixin`,
};
