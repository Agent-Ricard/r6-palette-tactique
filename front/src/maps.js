import plane1 from './assets/maps/presidential-plane/1.jpg';
import plane2 from './assets/maps/presidential-plane/2.jpg';
import plane3 from './assets/maps/presidential-plane/3.jpg';
import plane4 from './assets/maps/presidential-plane/4.jpg';
import bank1 from './assets/maps/bank/1.jpg';
import bank2 from './assets/maps/bank/2.jpg';
import bank3 from './assets/maps/bank/3.jpg';
import bank4 from './assets/maps/bank/4.jpg';

const MAPS = [
    {
        name: 'Presidential Airplane',
        floors: [
            { name: '1st Floor', src: plane1 },
            { name: '2nd Floor', src: plane2 },
            { name: '3rd Floor', src: plane3 },
            { name: 'Roof', src: plane4 },
        ]
    },
    {
        name: 'Bank',
        floors: [
            { name: 'Basement', src: bank1 },
            { name: '1st Floor', src: bank2 },
            { name: '2nd Floor', src: bank3 },
            { name: 'Roof', src: bank4 },
        ],
    },
];

export default MAPS;