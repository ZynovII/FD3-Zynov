var StrArr = ['пиротехника', 'елка', 'гирлянда', 'игрушки', 
'подарки', 'рождество', 'свечи', 'конфеты', 'дед мороз', 'колокольчики'];

ReactDOM.render(
    React.createElement(FilterComponent, {stringArr: StrArr}),
    document.getElementById('container')
);