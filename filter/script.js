var StrArr = ['пиротехника', 'елка', 'гирлянда', 'игрушки', 
'подарки', 'рождество', 'свечи', 'конфеты', 'дедмороз'];

ReactDOM.render(
    React.createElement(FilterComponent, {stringArr: StrArr}),
    document.getElementById('container')
);