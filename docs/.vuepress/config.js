module.exports = {
    title: 'વિસ્તાટો વેર્સો',
  	description: 'વારસો યાદ રાખો',
    base: '/visaraato-vaaraso/',
    dest: 'public',
    themeConfig : {
    logo: '/images/logo/logo.png',
      nav : [
        { text : 'Recipes', link : '/recipes/'},
        { text : 'Medicines', link : '/medicines/'},
        { text : 'Poems', link : '/poems/'},
      ],
      sidebar: {
      '/recipes/pickle/': [
        '',
        'pickle',     /* /foo/ */
        'pickle-2',  /* /foo/one.html */
        'pickle-3',
        'pickle-4',
        'pickle-and-others',

      ],

      '/recipes/': [
        '/recipes/pickle/',
        '/recipes/curry/',
        '/recipes/chutney/',

      ],
      '/medicines/': [
        'chavyanprash',      /* /bar/ */
        'alovera', /* /bar/three.html */
      ],

      // fallback
      '/poems/': [
        'halarda', /* /contact.html */
      ]
    }
  }
}