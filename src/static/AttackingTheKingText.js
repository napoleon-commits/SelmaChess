import ReplaceString from '@/utils/ReplaceString';
import EmptyChessBoardString from '@/static/EmptyChessBoardString';
import StartingPositionString from '@/static/StartingPositionString';

export default {
    header: 'Attacking the King',
    body: `
        The most exciting phase of the game of chess is the attacks leading to checkmate
        or to gain the substantial material. On this page,
        you will be able to review a number of different patterns for attacking an opponent.
        By playing through these patterns, you will learn to recognize such possibilities in your own game --
        either how to bring about the attacks or how to stop them.
    `,
    items: [
        {
            header: 'Smothered Mate',
            body: `
                The smothered checkmate is one of the prettiest in chess. A lone Knight,
                with the help of the enemy forces, checkmates the King.
            `,
            buttons: [
                {
                    buttonText: 'The Smothered Mate in Action',
                    moves: [
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                EmptyChessBoardString, 0, 'r',
                                            )
                                        ,7,'k',
                                    ),14,'p',
                                ),15,'p',
                            ),30,'N',
                        ),41,'Q',),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                EmptyChessBoardString, 0, 'r',
                                            )
                                        ,7,'k',
                                    ),14,'p',
                                ),15,'p',
                            ),13,'N',
                        ),41,'Q',),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                EmptyChessBoardString, 0, 'r',
                                            )
                                        ,6,'k',
                                    ),14,'p',
                                ),15,'p',
                            ),13,'N',
                        ),41,'Q',),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                EmptyChessBoardString, 0, 'r',
                                            )
                                        ,6,'k',
                                    ),14,'p',
                                ),15,'p',
                            ),23,'N',
                        ),41,'Q',),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                EmptyChessBoardString, 0, 'r',
                                            )
                                        ,7,'k',
                                    ),14,'p',
                                ),15,'p',
                            ),23,'N',
                        ),41,'Q',),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                EmptyChessBoardString, 0, 'r',
                                            )
                                        ,7,'k',
                                    ),14,'p',
                                ),15,'p',
                            ),23,'N',
                        ),6,'Q',),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            EmptyChessBoardString, 6, 'r',
                                        )
                                    ,7,'k',
                                ),14,'p',
                            ),15,'p',
                        ),23,'N'),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            EmptyChessBoardString, 6, 'r',
                                        )
                                    ,7,'k',
                                ),14,'p',
                            ),15,'p',
                        ),13,'N'),
                    ],
                }
            ],
        },
        {
            header: 'Back Rank Mate',
            body: `
                The back rank mate is both simple and elegant. The white Rook checks the King along the back rank,
                and black's own pawn prevent the King from escaping. In practice,
                the back rank mate can be easy or surprisingly difficult.
            `,
            buttons: [
                {
                    buttonText: 'AN EASY BACK RANK MATE',
                    moves: [
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        EmptyChessBoardString,3,'r'
                                                    ),5,'k'
                                                ),13,'p'
                                            ),14,'p'
                                        ),15,'p'
                                    ),27,'q'
                                ),44,'Q'
                            ),60,'R'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        EmptyChessBoardString,3,'r'
                                                    ),5,'k'
                                                ),13,'p'
                                            ),14,'p'
                                        ),15,'p'
                                    ),27,'q'
                                ),12,'Q'
                            ),60,'R'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        EmptyChessBoardString,3,'r'
                                                    ),6,'k'
                                                ),13,'p'
                                            ),14,'p'
                                        ),15,'p'
                                    ),27,'q'
                                ),12,'Q'
                            ),60,'R'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        EmptyChessBoardString,3,'r'
                                                    ),6,'k'
                                                ),13,'p'
                                            ),14,'p'
                                        ),15,'p'
                                    ),27,'q'
                                ),4,'Q'
                            ),60,'R'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    EmptyChessBoardString,4,'r'
                                                ),6,'k'
                                            ),13,'p'
                                        ),14,'p'
                                    ),15,'p'
                                ),27,'q'
                            ),60,'R'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                EmptyChessBoardString,4,'R'
                                            ),
                                            6,'k'
                                        ),13,'p'
                                    ),14,'p'
                                ),15,'p'
                            ),27,'q'
                        ),
                    ],
                },
                {
                    buttonText: 'A MORE DIFFICULT BACK RANK MATE',
                    moves: [
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        ReplaceString(
                                                            ReplaceString(
                                                                EmptyChessBoardString,5,'r'
                                                            ),6,'k'
                                                        ),8,'R'
                                                    ),13,'p'
                                                ),14,'p'
                                            ),15,'p'
                                        ),22,'r'
                                    ),43,'q'
                                ),53,'Q'
                            ),61,'R'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        ReplaceString(
                                                            EmptyChessBoardString,5,'r'
                                                        ),6,'k'
                                                    ),8,'R'
                                                ),14,'p'
                                            ),15,'p'
                                        ),22,'r'
                                    ),43,'q'
                                ),13,'Q'
                            ),61,'R'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        EmptyChessBoardString,13,'r'
                                                    ),6,'k'
                                                ),8,'R'
                                            ),14,'p'
                                        ),15,'p'
                                    ),22,'r'
                                ),43,'q'
                            ),61,'R'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        EmptyChessBoardString,13,'r'
                                                    ),6,'k'
                                                ),0,'R'
                                            ),14,'p'
                                        ),15,'p'
                                    ),22,'r'
                                ),43,'q'
                            ),61,'R'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        EmptyChessBoardString,5,'r'
                                                    ),6,'k'
                                                ),0,'R'
                                            ),14,'p'
                                        ),15,'p'
                                    ),22,'r'
                                ),43,'q'
                            ),61,'R'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    EmptyChessBoardString,5,'R'
                                                ),6,'k'
                                            ),0,'R'
                                        ),14,'p'
                                    ),15,'p'
                                ),22,'r'
                            ),43,'q'
                        ),
                    ],
                }
            ],
        },
        {
            header: 'Gueridon Mate',
            body: `
                Here is another very pleasing checkmate in which the King's own forces block its escape.
            `,
            buttons: [
                {
                    buttonText: 'The Gueridon Mate in Action',
                    moves: [
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        ReplaceString(
                                                            ReplaceString(
                                                                ReplaceString(
                                                                    ReplaceString(
                                                                        StartingPositionString,1,'.'
                                                                    ),5,'.'
                                                                ),11,'n'
                                                            ),12,'b'
                                                        ),19,'p'
                                                    ),62,'.'
                                                ),61,'.'
                                            ),52,'.'
                                        ),51,'.'
                                    ),35,'N'
                                ),36,'P'
                            ),34,'B'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        ReplaceString(
                                                            ReplaceString(
                                                                ReplaceString(
                                                                    ReplaceString(
                                                                        StartingPositionString,1,'.'
                                                                    ),5,'.'
                                                                ),11,'n'
                                                            ),12,'b'
                                                        ),19,'p'
                                                    ),62,'.'
                                                ),61,'.'
                                            ),52,'.'
                                        ),51,'.'
                                    ),35,'N'
                                ),36,'P'
                            ),13,'B'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        ReplaceString(
                                                            ReplaceString(
                                                                ReplaceString(
                                                                    ReplaceString(
                                                                        ReplaceString(
                                                                            StartingPositionString,1,'.'
                                                                        ),5,'.'
                                                                    ),11,'n'
                                                                ),12,'b'
                                                            ),19,'p'
                                                        ),62,'.'
                                                    ),61,'.'
                                                ),52,'.'
                                            ),51,'.'
                                        ),35,'N'
                                    ),36,'P'
                                ),13,'k'
                            ),4,'.'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        ReplaceString(
                                                            ReplaceString(
                                                                ReplaceString(
                                                                    ReplaceString(
                                                                        ReplaceString(
                                                                            ReplaceString(
                                                                                StartingPositionString,1,'.'
                                                                            ),5,'.'
                                                                        ),11,'n'
                                                                    ),12,'b'
                                                                ),19,'p'
                                                            ),62,'.'
                                                        ),61,'.'
                                                    ),52,'.'
                                                ),51,'.'
                                            ),20,'N'
                                        ),36,'P'
                                    ),13,'k'
                                ),4,'.'
                            ),35,'.'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        ReplaceString(
                                                            ReplaceString(
                                                                ReplaceString(
                                                                    ReplaceString(
                                                                        ReplaceString(
                                                                            ReplaceString(
                                                                                StartingPositionString,1,'.'
                                                                            ),5,'.'
                                                                        ),11,'n'
                                                                    ),12,'b'
                                                                ),19,'p'
                                                            ),62,'.'
                                                        ),61,'.'
                                                    ),52,'.'
                                                ),51,'.'
                                            ),20,'k'
                                        ),36,'P'
                                    ),13,'.'
                                ),4,'.'
                            ),35,'.'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        ReplaceString(
                                                            ReplaceString(
                                                                ReplaceString(
                                                                    ReplaceString(
                                                                        ReplaceString(
                                                                            ReplaceString(
                                                                                ReplaceString(
                                                                                    ReplaceString(
                                                                                        StartingPositionString,1,'.'
                                                                                    ),5,'.'
                                                                                ),11,'n'
                                                                            ),12,'b'
                                                                        ),19,'p'
                                                                    ),62,'.'
                                                                ),61,'.'
                                                            ),52,'.'
                                                        ),51,'.'
                                                    ),20,'k'
                                                ),36,'P'
                                            ),13,'.'
                                        ),4,'.'
                                    ),35,'.'
                                ),27,'Q'
                            ),59,'.'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        ReplaceString(
                                                            ReplaceString(
                                                                ReplaceString(
                                                                    ReplaceString(
                                                                        ReplaceString(
                                                                            ReplaceString(
                                                                                ReplaceString(
                                                                                    ReplaceString(
                                                                                        ReplaceString(
                                                                                            StartingPositionString,1,'.'
                                                                                        ),5,'.'
                                                                                    ),11,'n'
                                                                                ),12,'b'
                                                                            ),19,'p'
                                                                        ),62,'.'
                                                                    ),61,'.'
                                                                ),52,'.'
                                                            ),51,'.'
                                                        ),20,'.'
                                                    ),36,'P'
                                                ),13,'.'
                                            ),4,'.'
                                        ),35,'.'
                                    ),27,'Q'
                                ),59,'.'
                            ),21,'k'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        ReplaceString(
                                                            ReplaceString(
                                                                ReplaceString(
                                                                    ReplaceString(
                                                                        ReplaceString(
                                                                            ReplaceString(
                                                                                ReplaceString(
                                                                                    ReplaceString(
                                                                                        ReplaceString(
                                                                                            ReplaceString(
                                                                                                StartingPositionString,1,'.'
                                                                                            ),5,'.'
                                                                                        ),11,'n'
                                                                                    ),12,'b'
                                                                                ),19,'p'
                                                                            ),62,'.'
                                                                        ),61,'.'
                                                                    ),52,'.'
                                                                ),51,'.'
                                                            ),20,'.'
                                                        ),36,'P'
                                                    ),13,'.'
                                                ),4,'.'
                                            ),35,'.'
                                        ),27,'.'
                                    ),59,'.'
                                ),21,'k'
                            ),29,'Q'
                        ),
                    ],
                }
            ]
        },
        {
            header: `Greco's Mate`
        },
        {
            header: 'Epaulette Mate'
        },
        {
            header: `Anastasia's Mate`
        },
        {
            header: `Boden's Mate`
        },
        {
            header: `Blackburne's Mate`
        },
        {
            header: `Lolli's Mate`
        },
        {
            header: `Pillsbury's Mate`
        },
        {
            header: `Domiano's Mate`
        },
        {
            header: `Legal's Mate`
        },
    ],
}