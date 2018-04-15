var jadromin = [
  ['rok 2016', 29],
  ['rok 2040', 46]
]

var jadromax = [
  ['rok 2016', 29],
  ['rok 2040', 58]
]

var uhlimin = [
  ['rok 2016', 50],
  ['rok 2040', 11]
]

var uhlimax = [
  ['rok 2016', 50],
  ['rok 2040', 21]
]

var plynmin = [
  ['rok 2016', 4],
  ['rok 2040', 5]
]

var plynmax = [
  ['rok 2016', 4],
  ['rok 2040', 15]
]

var ozemin = [
  ['rok 2016', 11],
  ['rok 2040', 18]
]

var ozemax = [
  ['rok 2016', 11],
  ['rok 2040', 25]
]

var colors = ['#ECA038', '#A38456', '#EA614A', '#008836', '#20649B', '#6B96CA', '#A87A93', '#D19C95'];

Highcharts.chart('koncepce', {

    chart: {
        type: 'line'
    },

    title: {
        text: 'Jak se změní zdroje energie v ČR'
    },

    subtitle: {
        text: 'cílový podíl v roce 2040 je mezi oběma hodnotami'
    },

    xAxis: {
        type: 'category',
        categories: ['rok 2016', 'rok 2040']
    },

    yAxis: {
        title: {
            text: 'podíl na vyrobené elektřině'
        },
        max: 60
    },

    tooltip: {
        formatter: function() {
            if (this.x == 'rok 2016') {
                if (this.series.name == 'jádro max') {
                    return '<b>jádro</b><br>' + 'podíl: ' + this.y + ' %';
                } else if (this.series.name == 'uhlí max') {
                    return '<b>uhlí</b><br>' + 'podíl: ' + this.y + ' %';
                } else if (this.series.name == 'zemní plyn max') {
                    return '<b>zemní plyn</b><br>' + 'podíl: ' + this.y + ' %';
                } else if (this.series.name == 'obnovitelné zdroje max') {
                    return '<b>obnovitelné zdroje</b><br>' + 'podíl: ' + this.y + ' %';
                } else {
                    return '<b>' + this.series.name + '</b><br>' + 'podíl: ' + this.y + ' %';
                }
            } else {
                if (this.series.name == 'jádro') {
                    return '<b>jádro</b><br>' + 'podíl: ' + this.y + ' % (1,6× nárůst)';
                } else if (this.series.name == 'jádro max') {
                    return '<b>jádro</b><br>' + 'podíl: ' + this.y + ' % (2× nárůst)';
                } else if (this.series.name == 'uhlí') {
                    return '<b>uhlí</b><br>' + 'podíl: ' + this.y + ' % (4,5× propad)';
                } else if (this.series.name == 'uhlí max') {
                    return '<b>uhlí</b><br>' + 'podíl: ' + this.y + ' % (2,4× propad)';
                } else if (this.series.name == 'zemní plyn') {
                    return '<b>zemní plyn</b><br>' + 'podíl: ' + this.y + ' % (1,3× nárůst)';
                } else if (this.series.name == 'zemní plyn max') {
                    return '<b>zemní plyn</b><br>' + 'podíl: ' + this.y + ' % (3,8× nárůst)';
                } else if (this.series.name == 'obnovitelné zdroje') {
                    return '<b>obnovitelné zdroje</b><br>' + 'podíl: ' + this.y + ' % (1,6× nárůst)';
                } else if (this.series.name == 'obnovitelné zdroje max') {
                    return '<b>obnovitelné zdroje</b><br>' + 'podíl: ' + this.y + ' % (2,3× nárůst)';
                }
            }
        }
    },

    exporting: {
        enabled: false
    },

    credits: {
        text: 'Zdroj: MPO, ERÚ',
        href: 'https://www.eru.cz/documents/10540/462820/Rocni_zprava_provoz_ES_2016.pdf/800e5a09-a58a-4a73-913f-abc30cda42a5'
    },

    series: [{
        name: 'jádro',
        data: jadromin,
        marker: {
            symbol: 'circle'
        },
        color: colors[0]
    }, {
        name: 'jádro max',
        data: jadromax,
        marker: {
            symbol: 'circle'
        },
        color: colors[0],
        linkedTo: ':previous'
    }, {
        name: 'uhlí',
        data: uhlimin,
        marker: {
            symbol: 'circle'
        },
        color: colors[1]
    }, {
        name: 'uhlí max',
        data: uhlimax,
        marker: {
            symbol: 'circle'
        },
        color: colors[1],
        linkedTo: ':previous'
    }, {
        name: 'zemní plyn',
        data: plynmin,
        marker: {
            symbol: 'circle'
        },
        color: colors[4]
    }, {
        name: 'zemní plyn max',
        data: plynmax,
        marker: {
            symbol: 'circle'
        },
        color: colors[4],
        linkedTo: ':previous'
    }, {
        name: 'obnovitelné zdroje',
        data: ozemin,
        marker: {
            symbol: 'circle'
        },
        color: colors[3]
    }, {
        name: 'obnovitelné zdroje max',
        data: ozemax,
        marker: {
            symbol: 'circle'
        },
        color: colors[3],
        linkedTo: ':previous'
    }]
});
