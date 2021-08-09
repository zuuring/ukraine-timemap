module.exports = {
  title: 'example',
  display_title: 'example',
  SERVER_ROOT: 'http://localhost:4040',
  EVENTS_EXT: '/api/colombia_test/export_events/deeprows',
  CATEGORIES_EXT: '/api/colombia_test/export_categories/rows',
  ASSOCIATIONS_EXT: '/api/colombia_test/export_associations/deeprows',
  SOURCES_EXT: '/api/colombia_test/export_sources/deepids',
  SITES_EXT: '',
  SHAPES_EXT: '',
  DATE_FMT: 'MM/DD/YYYY',
  TIME_FMT: 'hh:mm',
  store: {
    app: {
      map: {
        anchor: [31.356397, 34.784818]
      }
    },
    features: {
      COLOR_BY_ASSOCIATION: true,
      USE_CATEGORIES: true,
      USE_ASSOCIATIONS: true,
      USE_SOURCES: true,
      USE_COVER: false,
      GRAPH_NONLOCATED: false,
      HIGHLIGHT_GROUPS: false
    }
  }
}
