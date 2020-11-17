/* eslint no-tabs: 0 */
import tsv from 'tsv';

export default tsv.parse(`
A00	Amar Gambit	rn1qkbnr/ppp2ppp/8/3p4/5p2/6PB/PPPPP2P/RNBQK2R w KQkq -	g1h3 d7d5 g2g3 e7e5 f2f4 c8h3 f1h3 e5f4
A00	Amar Opening: Gent Gambit	rn1qkbnr/ppp2ppp/8/3p4/8/6PB/PPPPP3/RNBQ1RK1 b kq -	g1h3 d7d5 g2g3 e7e5 f2f4 c8h3 f1h3 e5f4 e1g1 f4g3 h2g3
A00	Amar Opening: Paris Gambit	rnbqkbnr/ppp2ppp/8/3pp3/5P2/6PN/PPPPP2P/RNBQKB1R b KQkq -	g1h3 d7d5 g2g3 e7e5 f2f4
A00	Amar Opening	rnbqkbnr/pppppppp/8/8/8/7N/PPPPPPPP/RNBQKB1R b KQkq -	g1h3
A00	Amsterdam Attack	r1bqkb1r/ppp2ppp/2np1n2/4p3/2P5/1PN1P3/P2P1PPP/R1BQKBNR w KQkq -	e2e3 e7e5 c2c4 d7d6 b1c3 b8c6 b2b3 g8f6
A00	Anderssen Opening: Polish Gambit	rnbqkbnr/1ppppppp/8/p7/1P6/P7/2PPPPPP/RNBQKBNR b KQkq -	a2a3 a7a5 b2b4
A00	Anderssen Opening	rnbqkbnr/pppppppp/8/8/8/P7/1PPPPPPP/RNBQKBNR b KQkq -	a2a3
A00	Barnes Opening: Fools Mate	rnb1kbnr/pppp1ppp/8/4p3/6Pq/5P2/PPPPP2P/RNBQKBNR w KQkq -	f2f3 e7e5 g2g4 d8h4
A00	Barnes Opening: Gedult Gambit	rnbqkbnr/ppp1pp1p/6p1/8/3Pp3/2P2P2/PP4PP/RNBQKBNR b KQkq -	f2f3 d7d5 e2e4 g7g6 d2d4 d5e4 c2c3
A00	Barnes Opening: Gedult Gambit	rnbqkbnr/ppppp1pp/8/8/4p3/2N2P2/PPPP2PP/R1BQKBNR b KQkq -	f2f3 f7f5 e2e4 f5e4 b1c3
A00	Barnes Opening: Hammerschlag	rnbqkbnr/pppp1ppp/8/4p3/8/5P2/PPPPPKPP/RNBQ1BNR b kq -	f2f3 e7e5 e1f2
A00	Caro-Kann Defense: Labahn Attack	rnbqkbnr/pp1ppppp/2p5/8/1P2P3/8/P1PP1PPP/RNBQKBNR b KQkq -	b2b4 c7c6 e2e4
A00	Clemenz Opening	rnbqkbnr/pppppppp/8/8/8/7P/PPPPPPP1/RNBQKBNR b KQkq -	h2h3
A00	Clemenz Opening: Spike Lee Gambit	rnbqkbnr/ppppppp1/8/7p/6P1/7P/PPPPPP2/RNBQKBNR b KQkq -	h2h3 h7h5 g2g4
A00	Crab Opening	rnbqkbnr/pppp1ppp/8/4p3/P6P/8/1PPPPPP1/RNBQKBNR b KQkq -	a2a4 e7e5 h2h4
A00	Creepy Crawly Formation: Classical Defense	rnbqkbnr/ppp2ppp/8/3pp3/8/P6P/1PPPPPP1/RNBQKBNR w KQkq -	h2h3 d7d5 a2a3 e7e5
A00	Englund Gambit Declined: Reversed French	rnbqkbnr/pppp1ppp/8/4p3/3P4/4P3/PPP2PPP/RNBQKBNR b KQkq -	e2e3 e7e5 d2d4
A00	Formation: Cabbage Attack	r1bq1rk1/ppp2ppp/2nb1n2/3pp3/P7/1PP1P1P1/1B1P1P1P/RN1QKBNR b KQ -	c2c3 e7e5 a2a3 d7d5 b2b3 g8f6 c1b2 b8c6 a3a4 f8d6 g2g3 e8g8 e2e3
A00	Formation: Hippopotamus Attack	r1bq1rk1/ppp2ppp/2nb1n2/3pp3/8/PPPPPPP1/7P/RNBQKBNR b KQ -	a2a3 e7e5 b2b3 d7d5 c2c3 g8f6 d2d3 b8c6 e2e3 f8d6 f2f3 e8g8 g2g3
A00	Formation: Shy Attack	r1bq1rk1/ppp2ppp/2nb1n2/3pp3/8/P2PP1PP/1PPN1PB1/R1BQK1NR b KQ -	a2a3 e7e5 g2g3 d7d5 f1g2 g8f6 d2d3 b8c6 b1d2 f8d6 e2e3 e8g8 h2h3
A00	Gedults Opening	rnbqkbnr/pppppppp/8/8/8/5P2/PPPPP1PP/RNBQKBNR b KQkq -	f2f3
A00	Global Opening	rnbqkbnr/pppp1ppp/8/4p3/8/P6P/1PPPPPP1/RNBQKBNR b KQkq -	h2h3 e7e5 a2a3
A00	Grob Opening: Alessi Gambit	rnbqkbnr/ppppp1pp/8/5p2/6P1/8/PPPPPP1P/RNBQKBNR w KQkq -	g2g4 f7f5
A00	Grob Opening: Double Grob, Coca-Cola Gambit	rnbqkbnr/pppppp1p/8/6p1/5PP1/8/PPPPP2P/RNBQKBNR b KQkq -	g2g4 g7g5 f2f4
A00	Grob Opening: Double Grob	rnbqkbnr/pppppp1p/8/6p1/6P1/8/PPPPPP1P/RNBQKBNR w KQkq -	g2g4 g7g5
A00	Grob Opening: Grob Gambit, Basman Gambit	rnbqkbnr/ppp1ppp1/8/3p3P/8/8/PPPPPPBP/RNBQK1NR b KQkq -	g2g4 d7d5 f1g2 h7h5 g4h5
A00	Grob Opening: Grob Gambit Declined	rnbqkbnr/pp2pppp/2p5/3p4/6P1/8/PPPPPPBP/RNBQK1NR w KQkq -	g2g4 d7d5 f1g2 c7c6
A00	Grob Opening: Grob Gambit, Fritz Gambit	rn1qkbnr/ppp1pppp/8/3p4/2P3b1/8/PP1PPPBP/RNBQK1NR b KQkq -	g2g4 d7d5 f1g2 c8g4 c2c4
A00	Grob Opening: Grob Gambit, Fritz Gambit, Romford Countergambit	q3kbnr/p1pnpppp/8/8/2Pp2b1/8/PP1PPP1P/RNBQK1NR w KQk -	g2g4 d7d5 f1g2 c8g4 c2c4 d5d4 g2b7 b8d7 b7a8 d8a8
A00	Grob Opening: Grob Gambit, Keres Gambit	rnbqkbnr/ppp2ppp/8/3p4/3p2P1/2P5/PP2PPBP/RNBQK1NR b KQkq -	g2g4 d7d5 f1g2 e7e5 d2d4 e5d4 c2c3
A00	Grob Opening: Grob Gambit, Richter-Grob Gambit	rnbqkbnr/pp2pppp/2p5/8/2p3P1/1P6/P2PPPBP/RNBQK1NR b KQkq -	g2g4 d7d5 f1g2 c7c6 c2c4 d5c4 b2b3
A00	Grob Opening: Grob Gambit	rnbqkbnr/ppp1pppp/8/3p4/6P1/8/PPPPPPBP/RNBQK1NR b KQkq -	g2g4 d7d5 f1g2
A00	Grob Opening: Keene Defense, Main Line	rnbqk2r/pp2nppp/2pb4/3p4/2PPp1P1/2N4P/PP2PPB1/R1BQK1NR w KQkq -	g2g4 d7d5 h2h3 e7e5 f1g2 c7c6 d2d4 e5e4 c2c4 f8d6 b1c3 g8e7
A00	Grob Opening: Keene Defense	rnbqkbnr/pp3ppp/2p5/3pp3/6P1/7P/PPPPPPB1/RNBQK1NR w KQkq -	g2g4 d7d5 h2h3 e7e5 f1g2 c7c6
A00	Grob Opening: London Defense	r1bqkbnr/pppp1ppp/2n5/4p3/6P1/7P/PPPPPP2/RNBQKBNR w KQkq -	g2g4 e7e5 h2h3 b8c6
A00	Grob Opening	rnbqkbnr/pppppppp/8/8/6P1/8/PPPPPP1P/RNBQKBNR b KQkq -	g2g4
A00	Grob Opening: Romford Countergambit	rn1qkbnr/ppp1pppp/8/8/2Pp2b1/8/PP1PPPBP/RNBQK1NR w KQkq -	g2g4 d7d5 f1g2 c8g4 c2c4 d5d4
A00	Grob Opening: Spike Attack	rnbqkbnr/pp2pppp/2p5/3p2P1/8/8/PPPPPPBP/RNBQK1NR b KQkq -	g2g4 d7d5 f1g2 c7c6 g4g5
A00	Grob Opening: Spike, Hurst Attack	rnbqkbnr/ppp2ppp/8/3pp3/2P3P1/8/PP1PPPBP/RNBQK1NR b KQkq -	g2g4 e7e5 f1g2 d7d5 c2c4
A00	Grob Opening: Zilbermints Gambit	rnbqkbnr/ppp1pppp/8/8/4p1P1/2N5/PPPP1P1P/R1BQKBNR b KQkq -	g2g4 d7d5 e2e4 d5e4 b1c3
A00	Grob Opening: Zilbermints Gambit, Schiller Defense	rnbqkbnr/ppp1ppp1/8/7p/4p1P1/2N5/PPPP1P1P/R1BQKBNR w KQkq -	g2g4 d7d5 e2e4 d5e4 b1c3 h7h5
A00	Grob Opening: Zilbermints Gambit, Zilbermints-Hartlaub Gambit	rnbqkbnr/ppp2ppp/8/4p3/4p1P1/2NP4/PPP2P1P/R1BQKBNR b KQkq -	g2g4 d7d5 e2e4 d5e4 b1c3 e7e5 d2d3
A00	Hungarian Opening: Asten Gambit	r1bqkbnr/ppp3pp/2n5/4Pp2/3pN3/6P1/PPP1PP1P/R1BQKBNR w KQkq f6	g2g3 b8c6 b1c3 d7d5 d2d4 e7e5 d4e5 d5d4 c3e4 f7f5
A00	Hungarian Opening: Bücker Gambit	rnbqkbnr/ppp2ppp/8/3pp3/1P6/6P1/P1PPPPBP/RNBQK1NR b KQkq -	g2g3 d7d5 f1g2 e7e5 b2b4
A00	Hungarian Opening: Burk Gambit	rnbqk1nr/ppp1bppp/8/3p4/4p2N/P2P2P1/1PP1PP1P/RNBQKB1R b KQkq -	g2g3 e7e5 a2a3 d7d5 g1f3 e5e4 f3h4 f8e7 d2d3
A00	Hungarian Opening: Catalan Formation	rnbqkbnr/ppp2ppp/4p3/3p4/8/6P1/PPPPPPBP/RNBQK1NR w KQkq -	g2g3 d7d5 f1g2 e7e6
A00	Hungarian Opening: Dutch Defense	rnbqkbnr/ppppp1pp/8/5p2/8/6P1/PPPPPP1P/RNBQKBNR w KQkq -	g2g3 f7f5
A00	Hungarian Opening: Indian Defense	rnbqkb1r/pppppppp/5n2/8/8/6P1/PPPPPP1P/RNBQKBNR w KQkq -	g2g3 g8f6
A00	Hungarian Opening: Myers Defense	rnbqkbnr/pppppp1p/8/6p1/8/6P1/PPPPPP1P/RNBQKBNR w KQkq -	g2g3 g7g5
A00	Hungarian Opening: Pachman Gambit	rnbqkbnr/ppppp2p/6p1/7Q/4p3/6P1/PPPP1P1P/RNB1KBNR w KQkq -	g2g3 f7f5 e2e4 f5e4 d1h5 g7g6
A00	Hungarian Opening: Paris Gambit	rn1qkbnr/ppp2ppp/8/3p4/5p2/6PB/PPPPP2P/RNBQ1RK1 b kq -	g2g3 e7e5 g1h3 d7d5 f2f4 c8h3 f1h3 e5f4 e1g1
A00	Hungarian Opening: Reversed Alekhine	rnbqkbnr/pppp1ppp/8/4p3/8/5NP1/PPPPPP1P/RNBQKB1R b KQkq -	g2g3 e7e5 g1f3
A00	Hungarian Opening: Reversed Brooklyn Defense, Brooklyn Benko Gambit	rnbqkb1r/pppp1ppp/5n2/8/1P2p3/6P1/P1PPPP1P/RNBQKBNR b KQkq -	g2g3 e7e5 g1f3 e5e4 f3g1 g8f6 b2b4
A00	Hungarian Opening: Reversed Modern Defense	rnbqkbnr/pp2pppp/8/2pp4/8/6P1/PPPPPPBP/RNBQK1NR w KQkq -	g2g3 d7d5 f1g2 c7c5
A00	Hungarian Opening: Reversed Norwegian Defense	rnbqkbnr/pppp1ppp/8/8/4p2N/6P1/PPPPPP1P/RNBQKB1R b KQkq -	g2g3 e7e5 g1f3 e5e4 f3h4
A00	Hungarian Opening	rnbqkbnr/pppppppp/8/8/8/6P1/PPPPPP1P/RNBQKBNR b KQkq -	g2g3
A00	Hungarian Opening: Sicilian Invitation	rnbqkbnr/pp1ppppp/8/2p5/8/6P1/PPPPPP1P/RNBQKBNR w KQkq -	g2g3 c7c5
A00	Hungarian Opening: Slav Formation	rnbqkbnr/pp2pppp/2p5/3p4/8/6P1/PPPPPPBP/RNBQK1NR w KQkq -	g2g3 d7d5 f1g2 c7c6
A00	Hungarian Opening: Symmetrical Variation	rnbqkbnr/pppppp1p/6p1/8/8/6P1/PPPPPP1P/RNBQKBNR w KQkq -	g2g3 g7g6
A00	Hungarian Opening: Van Kuijk Gambit	rnbqkbnr/ppppppp1/8/8/7p/5NP1/PPPPPP1P/RNBQKB1R w KQkq -	g2g3 h7h5 g1f3 h5h4
A00	Hungarian Opening: Winterberg Gambit	rnbqkbnr/ppp2ppp/8/4p3/2p5/1P4P1/P2PPPBP/RNBQK1NR b KQkq -	g2g3 d7d5 f1g2 e7e5 c2c4 d5c4 b2b3
A00	Indian Game: Colle System, Kings Indian Variation	rnbqk2r/ppp1ppbp/3p1np1/8/3P4/3BPN2/PPP2PPP/RNBQK2R w KQkq -	e2e3 d7d6 d2d4 g7g6 g1f3 f8g7 f1d3 g8f6
A00	Kadas Opening: Beginners Trap	rnbqkbnr/ppp1pppp/8/3p4/7P/7R/PPPPPPP1/RNBQKBN1 b Qkq -	h2h4 d7d5 h1h3
A00	Kadas Opening: Kadas Gambit	rnbqkbnr/pp1ppppp/8/2p5/1P5P/8/P1PPPPP1/RNBQKBNR b KQkq -	h2h4 c7c5 b2b4
A00	Kadas Opening: Kadas Gambit	rnbqkbnr/pp2pppp/8/3p4/3p3P/2P2N2/PP2PPP1/RNBQKB1R b KQkq -	h2h4 d7d5 d2d4 c7c5 g1f3 c5d4 c2c3
A00	Kadas Opening: Kadas Gambit	rnbqkbnr/pppp1ppp/8/8/3p3P/2P5/PP2PPP1/RNBQKBNR b KQkq -	h2h4 e7e5 d2d4 e5d4 c2c3
A00	Kadas Opening: Myers Variation	rnbqkbnr/pp2pppp/8/2pp4/3PP2P/8/PPP2PP1/RNBQKBNR b KQkq -	h2h4 d7d5 d2d4 c7c5 e2e4
A00	Kadas Opening	rnbqkbnr/pppppppp/8/8/7P/8/PPPPPPP1/RNBQKBNR b KQkq -	h2h4
A00	Kadas Opening: Schneider Gambit	rnbqkbnr/pppppp1p/8/6p1/7P/8/PPPPPPP1/RNBQKBNR w KQkq -	h2h4 g7g5
A00	Kadas Opening: Steinbok Gambit	rnbqkbnr/ppppp1pp/8/8/4p2P/3P4/PPP2PP1/RNBQKBNR b KQkq -	h2h4 f7f5 e2e4 f5e4 d2d3
A00	Lasker Simul Special	rnbqkbnr/ppppppp1/8/7p/8/6P1/PPPPPP1P/RNBQKBNR w KQkq -	g2g3 h7h5
A00	Mieses Opening: Myers Spike Attack	rnbqkbnr/pppppp1p/6p1/8/6P1/3P4/PPP1PP1P/RNBQKBNR b KQkq -	d2d3 g7g6 g2g4
A00	Mieses Opening: Reversed Rat	rnbqkbnr/pppp1ppp/8/4p3/8/3P4/PPP1PPPP/RNBQKBNR w KQkq -	d2d3 e7e5
A00	Mieses Opening	rnbqkbnr/pppppppp/8/8/8/3P4/PPP1PPPP/RNBQKBNR b KQkq -	d2d3
A00	Polish Opening: Baltic Defense	rn1qkbnr/ppp1pppp/8/3p1b2/1P6/8/PBPPPPPP/RN1QKBNR w KQkq -	b2b4 d7d5 c1b2 c8f5
A00	Polish Opening: Birmingham Gambit	rnbqkbnr/pp1ppppp/8/2p5/1P6/8/P1PPPPPP/RNBQKBNR w KQkq -	b2b4 c7c5
A00	Polish Opening: Bugayev Advance Variation	rnbqkbnr/pppp2pp/5p2/1P2p3/8/8/PBPPPPPP/RN1QKBNR b KQkq -	b2b4 e7e5 c1b2 f7f6 b4b5
A00	Polish Opening: Bugayev Attack	rnbqkbnr/pppp1ppp/8/4p3/1P6/P7/2PPPPPP/RNBQKBNR b KQkq -	b2b4 e7e5 a2a3
A00	Polish Opening: Czech Defense	rnbqkbnr/ppp2ppp/3p4/4p3/1P6/8/PBPPPPPP/RN1QKBNR w KQkq -	b2b4 e7e5 c1b2 d7d6
A00	Polish Opening: Dutch Defense	rnbqkbnr/ppppp1pp/8/5p2/1P6/8/P1PPPPPP/RNBQKBNR w KQkq -	b2b4 f7f5
A00	Polish Opening: German Defense	rnb1kbnr/ppp1pppp/3q4/3p4/1P6/8/PBPPPPPP/RN1QKBNR w KQkq -	b2b4 d7d5 c1b2 d8d6
A00	Polish Opening: Grigorian Variation	r1bqkbnr/pppppppp/2n5/8/1P6/8/P1PPPPPP/RNBQKBNR w KQkq -	b2b4 b8c6
A00	Polish Opening: Karniewski Variation	rnbqkb1r/pppppppp/7n/8/1P6/8/P1PPPPPP/RNBQKBNR w KQkq -	b2b4 g8h6
A00	Polish Opening: Kings Indian Variation	rnbqkb1r/pppppp1p/5np1/8/1P6/8/PBPPPPPP/RN1QKBNR w KQkq -	b2b4 g8f6 c1b2 g7g6
A00	Polish Opening: Kings Indian Variation, Schiffler Attack	rnbqkb1r/pppppp1p/5np1/8/1P2P3/8/PBPP1PPP/RN1QKBNR b KQkq -	b2b4 g8f6 c1b2 g7g6 e2e4
A00	Polish Opening: Myers Variation	rnbqkbnr/pp2pppp/2p5/3p4/PP6/8/1BPPPPPP/RN1QKBNR b KQkq -	b2b4 d7d5 c1b2 c7c6 a2a4
A00	Polish Opening: Orangutan-Diemer Gambit	rnb1kbnr/ppp2ppp/3q4/4p3/1P2p3/P4P2/1BPP2PP/RN1QKBNR b KQkq -	b2b4 d7d5 c1b2 d8d6 a2a3 e7e5 e2e4 d5e4 f2f3
A00	Polish Opening: Orangutan-Hartlaub Gambit	rnbqkb1r/1p3ppp/2p1pn2/P2p4/4P3/P2P4/1BP2PPP/RN1QKBNR b KQkq -	b2b4 g8f6 c1b2 e7e6 a2a3 c7c6 d2d3 a7a5 b4a5 d7d5 e2e4
A00	Polish Opening: Outflank Variation	rnbqkbnr/pp1ppppp/2p5/8/1P6/8/P1PPPPPP/RNBQKBNR w KQkq -	b2b4 c7c6
A00	Polish Opening: Queenside Defense	rnbqkb1r/1ppp1ppp/p3pn2/1P6/8/8/PBPPPPPP/RN1QKBNR w KQkq -	b2b4 e7e6 c1b2 g8f6 b4b5 a7a6
A00	Polish Opening: Queens Indian Variation	rnbqkb1r/p1pp1ppp/1p2pn2/1P6/8/8/PBPPPPPP/RN1QKBNR w KQkq -	b2b4 e7e6 c1b2 g8f6 b4b5 b7b6
A00	Polish Opening	rnbqkbnr/pppppppp/8/8/1P6/8/P1PPPPPP/RNBQKBNR b KQkq -	b2b4
A00	Polish Opening: Rooks Swap Line	1nbqkb1r/1ppp1ppp/4pn2/1P6/8/8/2PPPPPP/BN1QKBNR b Kk -	b2b4 e7e6 c1b2 g8f6 b4b5 a7a6 a2a4 a6b5 a4b5 a8a1 b2a1
A00	Polish Opening: Schiffler-Sokolsky Variation	rnbqkb1r/ppp2ppp/4pn2/1P1p4/8/4P3/PBPP1PPP/RN1QKBNR b KQkq -	b2b4 e7e6 c1b2 g8f6 b4b5 d7d5 e2e3
A00	Polish Opening: Schuehler Gambit	rnbqkbnr/1p1ppppp/8/pp6/4P3/8/PBPP1PPP/RN1QKBNR b KQkq -	b2b4 c7c6 c1b2 a7a5 b4b5 c6b5 e2e4
A00	Polish Opening: Symmetrical Variation	rnbqkbnr/p1pppppp/8/1p6/1P6/8/P1PPPPPP/RNBQKBNR w KQkq -	b2b4 b7b5
A00	Polish Opening: Tartakower Gambit, Brinckmann Variation	r1b1k1nr/ppppq2p/2n2pp1/4pP2/1bB1P3/8/PBPP2PP/RN1QK1NR w KQkq -	b2b4 e7e5 c1b2 f7f6 e2e4 f8b4 f1c4 b8c6 f2f4 d8e7 f4f5 g7g6
A00	Polish Opening: Tartakower Gambit	rnbqkbnr/pppp2pp/5p2/4p3/1P2P3/8/PBPP1PPP/RN1QKBNR b KQkq -	b2b4 e7e5 c1b2 f7f6 e2e4
A00	Polish Opening: Wolferts Gambit	rnbqkbnr/pp1p1ppp/8/2p1p3/1P6/8/PBPPPPPP/RN1QKBNR w KQkq -	b2b4 e7e5 c1b2 c7c5
A00	Saragossa Opening	rnbqkbnr/pppppppp/8/8/8/2P5/PP1PPPPP/RNBQKBNR b KQkq -	c2c3
A00	Sodium Attack: Celadon Variation	rnbqk1nr/pp3ppp/8/2ppp3/8/P2PP3/P1P2PPP/1RBQKBNR b Kkq -	b1a3 e7e5 d2d3 f8a3 b2a3 d7d5 e2e3 c7c5 a1b1
A00	Sodium Attack: Chenoboskion Variation	rnbqkbnr/pppppp1p/6p1/8/6P1/N7/PPPPPP1P/R1BQKBNR b KQkq -	b1a3 g7g6 g2g4
A00	Sodium Attack: Durkin Gambit	r1bqkbnr/pppp2pp/2n5/4pp2/2N1P3/8/PPPP1PPP/R1BQKBNR w KQkq -	b1a3 e7e5 a3c4 b8c6 e2e4 f7f5
A00	Sodium Attack	rnbqkbnr/pppppppp/8/8/8/N7/PPPPPPPP/R1BQKBNR b KQkq -	b1a3
A00	Valencia Opening	rnbqkbnr/pppp1ppp/8/4p3/8/3P4/PPPNPPPP/R1BQKBNR b KQkq -	d2d3 e7e5 b1d2
A00	Van Geet Opening: Battambang Variation	rnbqkbnr/pppp1ppp/8/4p3/8/P1N5/1PPPPPPP/R1BQKBNR b KQkq -	a2a3 e7e5 b1c3
A00	Van Geet Opening: Billockus-Johansen Gambit	rnbqk1nr/pppp1ppp/8/2b1p3/8/2N2N2/PPPPPPPP/R1BQKB1R w KQkq -	b1c3 e7e5 g1f3 f8c5
A00	Van Geet Opening: Caro-Kann Variation, St. Patricks Attack	rnbqkbnr/pp2pppp/2p5/3p4/4P3/2N4P/PPPP1PP1/R1BQKBNR b KQkq -	b1c3 d7d5 e2e4 c7c6 h2h3
A00	Van Geet Opening: Damhaug Gambit	rnbqkbnr/ppp2ppp/8/3pp3/5P2/2N5/PPPPP1PP/R1BQKBNR w KQkq -	b1c3 d7d5 f2f4 e7e5
A00	Van Geet Opening: Dougherty Gambit	rnbqkbnr/ppp1pppp/8/8/4p3/2N2P2/PPPP2PP/R1BQKBNR b KQkq -	b1c3 d7d5 e2e4 d5e4 f2f3
A00	Van Geet Opening: Dunst-Perrenet Gambit	rnbqkbnr/ppp1pppp/8/8/4p3/2NP4/PPP2PPP/R1BQKBNR b KQkq -	b1c3 d7d5 e2e4 d5e4 d2d3
A00	Van Geet Opening: Düsseldorf Gambit	rnbqkbnr/pp1ppppp/8/2p5/1P6/2N5/P1PPPPPP/R1BQKBNR b KQkq -	b1c3 c7c5 b2b4
A00	Van Geet Opening: Gladbacher Gambit	rnbqkbnr/ppp2ppp/8/4p3/4p3/1PNP4/P1P2PPP/R1BQKBNR b KQkq -	b1c3 e7e5 b2b3 d7d5 e2e4 d5e4 d2d3
A00	Van Geet Opening: Hector Gambit	rnbqkbnr/ppp1pppp/8/8/2B1p3/2N5/PPPP1PPP/R1BQK1NR b KQkq -	b1c3 d7d5 e2e4 d5e4 f1c4
A00	Van Geet Opening: Hergert Gambit	r1bqkbnr/ppp2ppp/2np4/4P3/8/2N5/PPPPP1PP/R1BQKBNR w KQkq -	b1c3 d7d6 f2f4 e7e5 f4e5 b8c6
A00	Van Geet Opening: Hulsemann Gambit	rn1qkbnr/ppp2ppp/4b3/3pp2Q/8/2N1P3/PPPP1PPP/R1B1KBNR w KQkq -	b1c3 e7e5 e2e3 d7d5 d1h5 c8e6
A00	Van Geet Opening: Jendrossek Gambit	rnbqkb1r/pp2p1pp/5n2/2p2p2/1P1p1P2/5N2/P1PPPNPP/R1BQKB1R b KQkq -	b1c3 d7d5 f2f4 d5d4 c3e4 f7f5 e4f2 g8f6 g1f3 c7c5 b2b4
A00	Van Geet Opening: Kluever Gambit	rnbqkbnr/ppppp1pp/8/8/4p3/2NP4/PPP2PPP/R1BQKBNR b KQkq -	b1c3 f7f5 e2e4 f5e4 d2d3
A00	Van Geet Opening: Laroche Gambit	rnbqkbnr/p1pppppp/8/1p6/8/2N5/PPPPPPPP/R1BQKBNR w KQkq -	b1c3 b7b5
A00	Van Geet Opening: Liebig Gambit	rnbqkb1r/ppp2ppp/5n2/3pp2Q/8/2N1P3/PPPP1PPP/R1B1KBNR w KQkq -	b1c3 e7e5 e2e3 d7d5 d1h5 g8f6
A00	Van Geet Opening: Melleby Gambit	rnbqkbnr/pp2pppp/8/2p5/3pNP2/8/PPPPP1PP/R1BQKBNR w KQkq -	b1c3 d7d5 f2f4 d5d4 c3e4 c7c5
A00	Van Geet Opening: Myers Attack	rnbqkbnr/pppppp1p/6p1/8/7P/2N5/PPPPPPP1/R1BQKBNR b KQkq -	b1c3 g7g6 h2h4
A00	Van Geet Opening: Napoleon Attack	r1bqkbnr/pppp1ppp/2n5/4p3/3P4/2N2N2/PPP1PPPP/R1BQKB1R b KQkq -	b1c3 e7e5 g1f3 b8c6 d2d4
A00	Van Geet Opening: Novosibirsk Variation	r1bqkbnr/pp1ppppp/2n5/8/7Q/2N5/PPP1PPPP/R1B1KBNR b KQkq -	b1c3 c7c5 d2d4 c5d4 d1d4 b8c6 d4h4
A00	Van Geet Opening: Pfeiffer Gambit	rnbqkbnr/ppp2ppp/8/4p3/3pNP2/8/PPPPP1PP/R1BQKBNR w KQkq -	b1c3 d7d5 f2f4 d5d4 c3e4 e7e5
A00	Van Geet Opening: Pfeiffer Gambit, Sleipnir Countergambit	rnbqkbnr/ppp2ppp/8/4p3/3pNP2/5N2/PPPPP1PP/R1BQKB1R b KQkq -	b1c3 d7d5 f2f4 d5d4 c3e4 e7e5 g1f3
A00	Van Geet Opening: Reversed Nimzowitsch	rnbqkbnr/pppp1ppp/8/4p3/8/2N5/PPPPPPPP/R1BQKBNR w KQkq -	b1c3 e7e5
A00	Van Geet Opening: Reversed Scandinavian	r1bqkbnr/pppp1ppp/2n5/8/Q7/2N5/PPP1PPPP/R1B1KBNR b KQkq -	b1c3 e7e5 d2d4 e5d4 d1d4 b8c6 d4a4
A00	Van Geet Opening	rnbqkbnr/pppppppp/8/8/8/2N5/PPPPPPPP/R1BQKBNR b KQkq -	b1c3
A00	Van Geet Opening: Sicilian Two Knights	r1bqkbnr/pp1ppppp/2n5/8/3N4/2N5/PPP1PPPP/R1BQKB1R b KQkq -	b1c3 c7c5 g1f3 b8c6 d2d4 c5d4 f3d4
A00	Van Geet Opening: Sleipnir Gambit	rnbqk1nr/ppp2ppp/8/3pp3/1b1P4/2N1P3/PPP2PPP/R1BQKBNR w KQkq -	b1c3 d7d5 e2e3 e7e5 d2d4 f8b4
A00	Van Geet Opening: Tübingen Gambit	rnbqkb1r/pppppppp/5n2/8/6P1/2N5/PPPPPP1P/R1BQKBNR b KQkq -	b1c3 g8f6 g2g4
A00	Van Geet Opening: Twyble Attack	rnbqkbnr/pp1ppppp/8/2p5/8/2N5/PPPPPPPP/1RBQKBNR b Kkq -	b1c3 c7c5 a1b1
A00	Van Geet Opening: Venezolana Variation	rnbqkb1r/ppp1pppp/5n2/3p4/8/2NP2P1/PPP1PP1P/R1BQKBNR b KQkq -	b1c3 d7d5 d2d3 g8f6 g2g3
A00	Van Geet Opening: Warsteiner Gambit	rnbqkbnr/ppp1pp1p/8/3p2p1/5P2/2N5/PPPPP1PP/R1BQKBNR w KQkq -	b1c3 d7d5 f2f4 g7g5
A00	Van't Kruijs Opening: Bouncing Bishop Variation	rnbqkbnr/p1pp1ppp/8/1p2p3/8/1B2P3/PPPP1PPP/RNBQK1NR b KQkq -	e2e3 e7e5 f1c4 b7b5 c4b3
A00	Van't Kruijs Opening: Keoni-Hiva Gambit, Akahi Variation	rnbqkb1r/pppp1ppp/5n2/8/5p2/2N1PN2/PPPP2PP/R1BQKB1R b KQkq -	e2e3 e7e5 b1c3 g8f6 f2f4 e5f4 g1f3
A00	Van't Kruijs Opening: Keoni-Hiva Gambit, Alua Variation	r1bqkbnr/pppp1ppp/2n5/8/5p2/2N1PN2/PPPP2PP/R1BQKB1R b KQkq -	e2e3 e7e5 b1c3 b8c6 f2f4 e5f4 g1f3
A00	Van't Kruijs Opening: Keoni-Hiva Gambit Delayed	rnbqkb1r/ppp2ppp/5n2/3p4/5p2/P1N1PN2/1PPP2PP/R1BQKB1R b KQkq -	e2e3 d7d5 b1c3 g8f6 a2a3 e7e5 f2f4 e5f4 g1f3
A00	Van't Kruijs Opening: Keoni-Hiva Gambit, Ekolu Variation	rnbqkbnr/ppp2ppp/8/3p4/5p2/2N1PN2/PPPP2PP/R1BQKB1R b KQkq -	e2e3 e7e5 b1c3 d7d5 f2f4 e5f4 g1f3
A00	Van't Kruijs Opening	rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR b KQkq -	e2e3
A00	Venezolana Opening	r1bqkbnr/pp1ppppp/2n5/2p5/8/2NP2P1/PPP1PP1P/R1BQKBNR b KQkq -	d2d3 c7c5 b1c3 b8c6 g2g3
A00	Ware Opening: Cologne Gambit	r1bqkbnr/p1pnpppp/1p6/3p4/P2P4/2N5/1PP1PPPP/R1BQKBNR w KQkq -	a2a4 b7b6 d2d4 d7d5 b1c3 b8d7
A00	Ware Opening: Meadow Hay Trap	rnbqkbnr/pppp1ppp/8/4p3/P7/R7/1PPPPPPP/1NBQKBNR b Kkq -	a2a4 e7e5 a1a3
A00	Ware Opening	rnbqkbnr/pppppppp/8/8/P7/8/1PPPPPPP/RNBQKBNR b KQkq -	a2a4
A00	Ware Opening: Ware Gambit	rnbqkbnr/ppp3pp/P7/3ppp2/8/4P3/1PPP1PPP/RNBQKBNR b KQkq -	a2a4 e7e5 a4a5 d7d5 e2e3 f7f5 a5a6
A00	Ware Opening: Wing Gambit	rn1qkbnr/pbpppppp/8/1P6/8/8/1PPPPPPP/RNBQKBNR w KQkq -	a2a4 b7b5 a4b5 c8b7
A00	Zukertort Opening: Reversed Mexican Defense	rnbqkbnr/ppp1pppp/8/3p4/8/2N2N2/PPPPPPPP/R1BQKB1R b KQkq -	b1c3 d7d5 g1f3
A01	Nimzo-Larsen Attack: Classical Variation	rnbqkbnr/ppp1pppp/8/3p4/8/1P6/P1PPPPPP/RNBQKBNR w KQkq -	b2b3 d7d5
A01	Nimzo-Larsen Attack: Dutch Variation	rnbqkbnr/ppppp1pp/8/5p2/8/1P6/P1PPPPPP/RNBQKBNR w KQkq -	b2b3 f7f5
A01	Nimzo-Larsen Attack: English Variation	rnbqkbnr/pp1ppppp/8/2p5/8/1P6/P1PPPPPP/RNBQKBNR w KQkq -	b2b3 c7c5
A01	Nimzo-Larsen Attack: Graz Attack	rnbqkbnr/ppp1pppp/8/3p4/8/BP6/P1PPPPPP/RN1QKBNR b KQkq -	b2b3 d7d5 c1a3
A01	Nimzo-Larsen Attack: Indian Variation	rnbqkb1r/pppppppp/5n2/8/8/1P6/P1PPPPPP/RNBQKBNR w KQkq -	b2b3 g8f6
A01	Nimzo-Larsen Attack: Modern Variation	r1bqkbnr/pppp1ppp/2n5/4p3/8/1P2P3/PBPP1PPP/RN1QKBNR b KQkq -	b2b3 e7e5 c1b2 b8c6 e2e3
A01	Nimzo-Larsen Attack: Modern Variation	r1bqkbnr/pppp1ppp/2n5/4p3/8/1P6/PBPPPPPP/RN1QKBNR w KQkq -	b2b3 e7e5 c1b2 b8c6
A01	Nimzo-Larsen Attack: Modern Variation	rnbqkbnr/pppp1ppp/8/4p3/8/1P6/P1PPPPPP/RNBQKBNR w KQkq -	b2b3 e7e5
A01	Nimzo-Larsen Attack: Modern Variation	rnbqkbnr/pppp1ppp/8/4p3/8/1P6/PBPPPPPP/RN1QKBNR b KQkq -	b2b3 e7e5 c1b2
A01	Nimzo-Larsen Attack: Pachman Gambit	r1bqkbnr/pppp1ppp/2n5/4p3/5P2/1P6/PBPPP1PP/RN1QKBNR b KQkq -	b2b3 e7e5 c1b2 b8c6 f2f4
A01	Nimzo-Larsen Attack: Ringelbach Gambit	rnbqkbnr/pppp2pp/4p3/5p2/4P3/1P6/PBPP1PPP/RN1QKBNR b KQkq -	b2b3 f7f5 c1b2 e7e6 e2e4
A01	Nimzo-Larsen Attack	rnbqkbnr/pppppppp/8/8/8/1P6/P1PPPPPP/RNBQKBNR b KQkq -	b2b3
A01	Nimzo-Larsen Attack: Spike Variation	rnbqkb1r/pppppp1p/5np1/8/6P1/1P6/PBPPPP1P/RN1QKBNR b KQkq -	b2b3 g8f6 c1b2 g7g6 g2g4
A01	Nimzo-Larsen Attack: Symmetrical Variation	rnbqkbnr/p1pppppp/1p6/8/8/1P6/P1PPPPPP/RNBQKBNR w KQkq -	b2b3 b7b6
A01	Nimzowitsch-Larsen Attack: Polish Variation	rnbqkbnr/p1pppppp/8/1p6/8/1P6/P1PPPPPP/RNBQKBNR w KQkq -	b2b3 b7b5
A02	Bird Opening: Batavo-Polish Attack	rnbqkb1r/pppppp1p/5np1/8/1P3P2/5N2/P1PPP1PP/RNBQKB1R b KQkq -	f2f4 g8f6 g1f3 g7g6 b2b4
A02	Bird Opening: Froms Gambit, Bahr Gambit	rnbqkbnr/pppp1ppp/8/4p3/5P2/2N5/PPPPP1PP/R1BQKBNR b KQkq -	f2f4 e7e5 b1c3
A02	Bird Opening: Froms Gambit, Langheld Gambit	rnbqkb1r/ppp2ppp/3P1n2/8/8/8/PPPPP1PP/RNBQKBNR w KQkq -	f2f4 e7e5 f4e5 d7d6 e5d6 g8f6
A02	Bird Opening: Froms Gambit, Lasker Variation	rnbqk1nr/ppp2p1p/3b4/6p1/8/5N2/PPPPP1PP/RNBQKB1R w KQkq -	f2f4 e7e5 f4e5 d7d6 e5d6 f8d6 g1f3 g7g5
A02	Bird Opening: Froms Gambit, Lipke Variation	rnbqk2r/ppp2ppp/3b3n/8/3P4/5N2/PPP1P1PP/RNBQKB1R b KQkq -	f2f4 e7e5 f4e5 d7d6 e5d6 f8d6 g1f3 g8h6 d2d4
A02	Bird Opening: Froms Gambit	rnbqkbnr/pppp1ppp/8/4p3/5P2/8/PPPPP1PP/RNBQKBNR w KQkq -	f2f4 e7e5
A02	Bird Opening: Hobbs Gambit	rnbqkbnr/pppppp1p/8/6p1/5P2/8/PPPPP1PP/RNBQKBNR w KQkq -	f2f4 g7g5
A02	Bird Opening: Hobbs-Zilbermints Gambit	rnbqkbnr/pppppp2/7p/6p1/5P2/5N2/PPPPP1PP/RNBQKB1R w KQkq -	f2f4 h7h6 g1f3 g7g5
A02	Bird Opening: Horsefly Defense	rnbqkb1r/pppppppp/7n/8/5P2/8/PPPPP1PP/RNBQKBNR w KQkq -	f2f4 g8h6
A02	Bird Opening: Lasker Gambit	rnbqkbnr/pppp2pp/5p2/4P3/8/8/PPPPP1PP/RNBQKBNR w KQkq -	f2f4 e7e5 f4e5 f7f6
A02	Bird Opening: Mujannah	rnbqkb1r/pppppppp/5n2/8/2P2P2/8/PP1PP1PP/RNBQKBNR b KQkq -	f2f4 g8f6 c2c4
A02	Bird Opening: Myers Defense	rnbqkbnr/p1pppppp/8/1p6/5P2/8/PPPPP1PP/RNBQKBNR w KQkq -	f2f4 b7b5
A02	Bird Opening: Platz Gambit	rnbqkb1r/ppppnppp/8/4P3/8/8/PPPPP1PP/RNBQKBNR w KQkq -	f2f4 e7e5 f4e5 g8e7
A02	Bird Opening	rnbqkb1r/pppppppp/5n2/8/5P2/8/PPPPP1PP/RNBQKBNR w KQkq -	f2f4 g8f6
A02	Bird Opening	rnbqkbnr/pppppppp/8/8/5P2/8/PPPPP1PP/RNBQKBNR b KQkq -	f2f4
A02	Bird Opening: Schlechter Gambit	r1bqkbnr/pppp1ppp/2n5/4P3/8/8/PPPPP1PP/RNBQKBNR w KQkq -	f2f4 e7e5 f4e5 b8c6
A02	Bird Opening: Siegener Gambit	rnbqkbnr/pp1p1ppp/8/2p5/3p1P2/2P2N2/PP2P1PP/RNBQKB1R b KQkq -	f2f4 e7e5 d2d4 e5d4 g1f3 c7c5 c2c3
A02	Bird Opening: Swiss Gambit	rnbqkb1r/ppppp1pp/5n2/8/4pPP1/2N5/PPPP3P/R1BQKBNR b KQkq -	f2f4 f7f5 e2e4 f5e4 b1c3 g8f6 g2g4
A02	Bird Opening: Wagner-Zwitersch Gambit	rnbqkbnr/ppppp1pp/8/5p2/4PP2/8/PPPP2PP/RNBQKBNR b KQkq -	f2f4 f7f5 e2e4
A02	System: Double Duck Formation	rnbqkbnr/ppp1p1pp/8/3p1p2/3P1P2/8/PPP1P1PP/RNBQKBNR w KQkq -	f2f4 f7f5 d2d4 d7d5
A03	Bird Opening: Dutch Variation, Dudweiler Gambit	rnbqkbnr/ppp1pppp/8/3p4/5PP1/8/PPPPP2P/RNBQKBNR b KQkq -	f2f4 d7d5 g2g4
A03	Bird Opening: Dutch Variation	rnbqkbnr/ppp1pppp/8/3p4/5P2/8/PPPPP1PP/RNBQKBNR w KQkq -	f2f4 d7d5
A03	Bird Opening: Lasker Variation	rnbqkb1r/pp2pppp/5n2/2pp4/5P2/4PN2/PPPP2PP/RNBQKB1R w KQkq -	f2f4 d7d5 g1f3 g8f6 e2e3 c7c5
A03	Bird Opening: Sturm Gambit	rnbqkbnr/ppp1pppp/8/3p4/2P2P2/8/PP1PP1PP/RNBQKBNR b KQkq -	f2f4 d7d5 c2c4
A03	Bird Opening: Thomas Gambit	rnbqkb1r/pp2pppp/5n2/2p5/3p1P2/1P2PN2/PBPP2PP/RN1QKB1R b KQkq -	f2f4 d7d5 b2b3 g8f6 c1b2 d5d4 g1f3 c7c5 e2e3
A03	Bird Opening: Williams Gambit	rnbqkb1r/ppp1pppp/5n2/8/4pP2/2N5/PPPPQ1PP/R1B1KBNR b KQkq -	f2f4 d7d5 e2e4 d5e4 b1c3 g8f6 d1e2
A03	Bird Opening: Williams Gambit	rnbqkbnr/ppp1pppp/8/3p4/4PP2/8/PPPP2PP/RNBQKBNR b KQkq -	f2f4 d7d5 e2e4
A03	Bird Opening: Williams-Zilbermints Gambit	rnbqkb1r/ppp1pppp/5n2/8/4pP2/2N5/PPPPN1PP/R1BQKB1R b KQkq -	f2f4 d7d5 e2e4 d5e4 b1c3 g8f6 g1e2
A04	Colle System: Rhamphorhynchus Variation	rnb1k1nr/pp1pppbp/6p1/q1P5/8/4PN2/PPP2PPP/RNBQKB1R w KQkq -	g1f3 c7c5 e2e3 g7g6 d2d4 f8g7 d4c5 d8a5
A04	Modern Defense: Semi-Averbakh Variation, Polish Variation	rnb1k1nr/pp1pppbp/1q4p1/2p5/2PPP3/5N2/PP3PPP/RNBQKB1R w KQkq -	g1f3 c7c5 c2c4 g7g6 d2d4 f8g7 e2e4 d8b6
A04	Modern Defense: Semi-Averbakh Variation, Pterodactyl Variation Accepted	rnb1k1nr/pp2ppbp/3p2p1/q1P5/2P1P3/5N2/PP3PPP/RNBQKB1R w KQkq -	g1f3 g7g6 d2d4 f8g7 e2e4 d7d6 c2c4 c7c5 d4c5 d8a5
A04	Modern Defense: Semi-Averbakh Variation, Pterodactyl Variation	rnb1k1nr/pp1pppbp/6p1/q1p5/2PPP3/5N2/PP3PPP/RNBQKB1R w KQkq -	g1f3 c7c5 c2c4 g7g6 d2d4 f8g7 e2e4 d8a5
A04	Reti Opening	rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq -	g1f3
A04	Zukertort Defense: Drunken Cavalry Variation	r1bqkb1r/pppppppp/n6n/8/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq -	g1f3 b8a6 e2e4 g8h6
A04	Zukertort Opening: Arctic Defense, Drunken Knight Variation	rnbqkb1r/pppppnpp/5p2/8/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq -	g1f3 f7f6 e2e4 g8h6 d2d4 h6f7
A04	Zukertort Opening: Arctic Defense	rnbqkbnr/ppppp1pp/5p2/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq -	g1f3 f7f6
A04	Zukertort Opening: Basman Defense	rnbqkbnr/ppppppp1/7p/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq -	g1f3 h7h6
A04	Zukertort Opening: Black Mustang Defense	r1bqkbnr/pppppppp/2n5/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq -	g1f3 b8c6
A04	Zukertort Opening: Dutch Variation	rnbqkbnr/ppppp1pp/8/5p2/8/5N2/PPPPPPPP/RNBQKB1R w KQkq -	g1f3 f7f5
A04	Zukertort Opening: Herrstrom Gambit	rnbqkbnr/pppppp1p/8/6p1/8/5N2/PPPPPPPP/RNBQKB1R w KQkq -	g1f3 g7g5
A04	Zukertort Opening: Kingside Fianchetto	rnbqkbnr/pppppp1p/6p1/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq -	g1f3 g7g6
A04	Zukertort Opening: Lisitsyn Gambit Deferred	rnbqkb1r/ppppp1pp/5n2/5p2/4P3/3P1N2/PPP2PPP/RNBQKB1R b KQkq -	g1f3 f7f5 d2d3 g8f6 e2e4
A04	Zukertort Opening: Lisitsyn Gambit	rnbqkbnr/ppppp1pp/8/5p2/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq -	g1f3 f7f5 e2e4
A04	Zukertort Opening: Pirc Invitation	rnbqkbnr/ppp1pppp/3p4/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq -	g1f3 d7d6
A04	Zukertort Opening: Polish Defense	rnbqkbnr/p1pppppp/8/1p6/8/5N2/PPPPPPPP/RNBQKB1R w KQkq -	g1f3 b7b5
A04	Zukertort Opening: Queens Gambit Invitation	rnbqkbnr/pppp1ppp/4p3/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq -	g1f3 e7e6
A04	Zukertort Opening: Queenside Fianchetto Variation	rnbqkbnr/p1pppppp/1p6/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq -	g1f3 b7b6
A04	Zukertort Opening: Ross Gambit	rnbqkbnr/pppp1ppp/8/4p3/8/5N2/PPPPPPPP/RNBQKB1R w KQkq -	g1f3 e7e5
A04	Zukertort Opening: Shabalov Gambit	rnbqkbnr/3p1ppp/p3p3/1pp5/2P5/2N2NP1/PP1PPP1P/R1BQKB1R w KQkq -	g1f3 e7e6 c2c4 a7a6 b1c3 c7c5 g2g3 b7b5
A04	Zukertort Opening: Sicilian Invitation	rnbqkbnr/pp1ppppp/8/2p5/8/5N2/PPPPPPPP/RNBQKB1R w KQkq -	g1f3 c7c5
A04	Zukertort Opening: Slav Invitation	rnbqkbnr/pp1ppppp/2p5/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq -	g1f3 c7c6
A04	Zukertort Opening: Speelsmet Gambit	rnbqkbnr/pp1ppppp/8/8/3p4/4PN2/PPP2PPP/RNBQKB1R b KQkq -	g1f3 c7c5 d2d4 c5d4 e2e3
A04	Zukertort Opening: St. George Defense	rnbqkbnr/1ppppppp/p7/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq -	g1f3 a7a6
A04	Zukertort Opening: The Walrus	r1bqkbnr/ppp2ppp/2p5/8/8/8/PPPPPPPP/RNBQKB1R w KQkq -	g1f3 e7e5 f3e5 b8c6 e5c6 d7c6
A04	Zukertort Opening: Vos Gambit	rnbqkbnr/ppp2ppp/3p4/4p3/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq -	g1f3 d7d6 d2d4 e7e5
A04	Zukertort Opening: Wade Defense	rn1qkbnr/ppp1pppp/3p4/8/4P1b1/5N2/PPPP1PPP/RNBQKB1R w KQkq -	g1f3 d7d6 e2e4 c8g4
A04	Zukertort Opening: Ware Defense	rnbqkbnr/1ppppppp/8/p7/8/5N2/PPPPPPPP/RNBQKB1R w KQkq -	g1f3 a7a5
A05	Kings Indian Attack	rnbqkb1r/ppp1pppp/5n2/3p4/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq -	g1f3 g8f6 g2g3 d7d5
A05	Kings Indian Attack: Smyslov Variation	rnbqkb1r/pppppp1p/5np1/8/1P6/5NP1/P1PPPP1P/RNBQKB1R b KQkq -	g1f3 g8f6 g2g3 g7g6 b2b4
A05	Kings Indian Attack: Spassky Variation	rnbqkb1r/p1pppppp/5n2/1p6/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq -	g1f3 g8f6 g2g3 b7b5
A05	Kings Indian Attack: Symmetrical Defense	rnbqkb1r/pppppp1p/5np1/8/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq -	g1f3 g8f6 g2g3 g7g6
A05	Kings Indian Attack: Wahls Defense	rnbq1rk1/ppp1ppbp/5np1/3p4/8/3P1NP1/PPP1PPBP/RNBQ1RK1 w - -	g1f3 g8f6 g2g3 g7g6 f1g2 f8g7 e1g1 e8g8 d2d3 d7d5
A05	Polish Opening: Zukertort System	rnbqkb1r/pppppppp/5n2/8/1P6/5N2/P1PPPPPP/RNBQKB1R b KQkq -	g1f3 g8f6 b2b4
A05	Reti Opening	rnbqkb1r/pppppppp/5n2/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq -	g1f3 g8f6
A05	Zukertort Opening: Double Fianchetto Attack	rnbq1rk1/ppp1ppbp/3p1np1/8/8/1P3NP1/PBPPPPBP/RN1Q1RK1 b - -	g1f3 g8f6 g2g3 g7g6 b2b3 f8g7 c1b2 e8g8 f1g2 d7d6 e1g1
A05	Zukertort Opening: Lemberger Gambit	rnbqkb1r/pppppppp/5n2/8/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq -	g1f3 g8f6 e2e4
A05	Zukertort Opening: Myers Polish Attack	rnbqkb1r/pppppp1p/5np1/8/PP6/5N2/2PPPPPP/RNBQKB1R b KQkq -	g1f3 g8f6 a2a4 g7g6 b2b4
A05	Zukertort Opening: Nimzo-Larsen Variation	rnbqkb1r/pppppppp/5n2/8/8/1P3N2/P1PPPPPP/RNBQKB1R b KQkq -	g1f3 g8f6 b2b3
A05	Zukertort Opening: Quiet System	rnbqkb1r/pppppppp/5n2/8/8/4PN2/PPPP1PPP/RNBQKB1R b KQkq -	g1f3 g8f6 e2e3
A05	Zukertort Opening	r1bqkb1r/pppppppp/2n2n2/8/8/2N2N2/PPPPPPPP/R1BQKB1R w KQkq -	g1f3 g8f6 b1c3 b8c6
A06	Nimzo-Larsen Attack: Classical Variation	rnbqkbnr/ppp1pppp/8/3p4/8/1P3N2/P1PPPPPP/RNBQKB1R b KQkq -	g1f3 d7d5 b2b3
A06	Nimzo-Larsen Attack: Norfolk Gambit	rnbqkb1r/pp2pppp/5n2/2pp4/4P3/1P3N2/PBPP1PPP/RN1QKB1R b KQkq -	g1f3 d7d5 b2b3 g8f6 c1b2 c7c5 e2e4
A06	Nimzo-Larsen Attack: Norfolk Gambit	rnbqkbnr/pp2pppp/8/2pp4/4P3/1P3N2/P1PP1PPP/RNBQKB1R b KQkq -	g1f3 d7d5 b2b3 c7c5 e2e4
A06	Reti Opening	rnbqkbnr/ppp1pppp/8/3p4/8/5N2/PPPPPPPP/RNBQKB1R w KQkq -	g1f3 d7d5
A06	Zukertort Opening: Ampel Variation	rnbqkbnr/ppp1pppp/8/3p4/8/5N2/PPPPPPPP/RNBQKBR1 b Qkq -	g1f3 d7d5 h1g1
A06	Zukertort Opening: Old Indian Attack	rnbqkbnr/ppp1pppp/8/3p4/8/3P1N2/PPP1PPPP/RNBQKB1R b KQkq -	g1f3 d7d5 d2d3
A06	Zukertort Opening: Pachman Gambit	rnbqkbnr/pp2pppp/8/2p5/2p5/1P2PN2/P2P1PPP/RNBQKB1R b KQkq -	g1f3 d7d5 e2e3 c7c5 c2c4 d5c4 b2b3
A06	Zukertort Opening: Regina-Nu Gambit	rnbqkbnr/pp2pppp/8/2p5/2p5/1PN2N2/P2PPPPP/R1BQKB1R b KQkq -	g1f3 d7d5 b2b3 c7c5 c2c4 d5c4 b1c3
A06	Zukertort Opening: Santasieres Folly	rnbqkbnr/ppp1pppp/8/3p4/1P6/5N2/P1PPPPPP/RNBQKB1R b KQkq -	b2b4 d7d5 g1f3
A06	Zukertort Opening: Tennison Gambit	rnbqkbnr/ppp1pppp/8/3p4/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq -	e2e4 d7d5 g1f3
A06	Zukertort Opening: The Potato	rnbqkbnr/ppp1pppp/8/3p4/P7/5N2/1PPPPPPP/RNBQKB1R b KQkq -	g1f3 d7d5 a2a4
A07	English Opening: Anglo-Indian Defense, Grünfeld Formation	rnbqkb1r/ppp1pp1p/5np1/3p4/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq -	g2g3 d7d5 g1f3 g7g6 c2c4 g8f6
A07	Hungarian Opening: Wiedenhagen-Beta Gambit	rnbqkbnr/ppp1pp1p/8/3p2p1/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq -	g2g3 d7d5 g1f3 g7g5
A07	Kings Indian Attack: Double Fianchetto	rnbqkbnr/ppp1pp1p/6p1/3p4/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq -	g1f3 d7d5 g2g3 g7g6
A07	Kings Indian Attack: Keres Variation	r2qkbnr/pppnpppp/8/3p4/6b1/5NP1/PPPPPPBP/RNBQK2R w KQkq -	g1f3 d7d5 g2g3 c8g4 f1g2 b8d7
A07	Kings Indian Attack: Keres Variation	rn1qkbnr/ppp1pppp/8/3p4/6b1/5NP1/PPPPPP1P/RNBQKB1R w KQkq -	g1f3 d7d5 g2g3 c8g4
A07	Kings Indian Attack: Omega-Delta Gambit	rnbqkbnr/ppp2ppp/8/3pp3/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq -	g1f3 d7d5 g2g3 e7e5
A07	Kings Indian Attack: Pachman System	rnbqk2r/ppp1npbp/6p1/3pp3/8/3P1NP1/PPP1PPBP/RNBQ1RK1 w kq -	g1f3 d7d5 g2g3 g7g6 f1g2 f8g7 e1g1 e7e5 d2d3 g8e7
A07	Kings Indian Attack	rnbqkbnr/ppp1pppp/8/3p4/8/5NP1/PPPPPP1P/RNBQKB1R b KQkq -	g1f3 d7d5 g2g3
A07	Kings Indian Attack: Sicilian Variation	rnbqkbnr/pp2pppp/8/2pp4/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq -	g1f3 d7d5 g2g3 c7c5
A07	Kings Indian Attack: Yugoslav Variation	rn1qkb1r/pp2pppp/2p2n2/3p4/6b1/5NP1/PPPPPPBP/RNBQ1RK1 w kq -	g1f3 g8f6 g2g3 d7d5 f1g2 c7c6 e1g1 c8g4
A08	Kings Indian Attack: French Variation	r1bqkbnr/pp2pppp/2n5/2pp4/8/5NP1/PPPPPPBP/RNBQK2R w KQkq -	g1f3 d7d5 g2g3 c7c5 f1g2 b8c6
A08	Kings Indian Attack: Sicilian Variation	r1bq1rk1/pp2bppp/2n1pn2/2pp4/4P3/3P1NP1/PPPN1PBP/R1BQR1K1 b - -	e2e4 e7e6 d2d3 d7d5 b1d2 g8f6 g1f3 c7c5 g2g3 b8c6 f1g2 f8e7 e1g1 e8g8 f1e1
A08	Kings Indian Attack: Sicilian Variation	rnbqkbnr/pp2pppp/8/2pp4/8/5NP1/PPPPPPBP/RNBQK2R b KQkq -	g1f3 d7d5 g2g3 c7c5 f1g2
A08	Zukertort Opening: Grünfeld Reversed	r1bqkbnr/pp3ppp/2n1p3/2pp4/3P4/5NP1/PPP1PPBP/RNBQ1RK1 b kq -	g1f3 d7d5 g2g3 c7c5 f1g2 b8c6 d2d4 e7e6 e1g1
A09	Reti Opening: Advance Variation, Michel Gambit	rnbqkbnr/pp2pppp/8/2p5/1PPp4/5N2/P2PPPPP/RNBQKB1R w KQkq -	g1f3 d7d5 c2c4 d5d4 b2b4 c7c5
A09	Reti Opening: Advance Variation	rnbqkbnr/ppp1pppp/8/8/2Pp4/5N2/PP1PPPPP/RNBQKB1R w KQkq -	g1f3 d7d5 c2c4 d5d4
A09	Reti Opening: Penguin Variation	rnbqkbnr/ppp1pppp/8/8/2Pp4/5N2/PP1PPPPP/RNBQKBR1 b Qkq -	g1f3 d7d5 c2c4 d5d4 h1g1
A09	Reti Opening: Reti Accepted	rnbqkbnr/ppp1pppp/8/8/2p5/5N2/PP1PPPPP/RNBQKB1R w KQkq -	g1f3 d7d5 c2c4 d5c4
A09	Reti Opening: Reti Gambit, Keres Variation	rn1qkbnr/ppp1pppp/4b3/8/2p5/4PN2/PP1P1PPP/RNBQKB1R w KQkq -	g1f3 d7d5 c2c4 d5c4 e2e3 c8e6
A09	Reti Opening: Reversed Blumenfeld Gambit	rnbqkbnr/pp2pppp/8/2p5/1PPp4/4PN2/P2P1PPP/RNBQKB1R b KQkq -	g1f3 d7d5 c2c4 d5d4 e2e3 c7c5 b2b4
A09	Reti Opening	rnbqkbnr/ppp1pppp/8/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq -	g1f3 d7d5 c2c4
A09	Reti Opening: Zilbermints Gambit	rnbqkbnr/p1p1pppp/8/1p1p4/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq -	g1f3 d7d5 c2c4 b7b5
A10	Dutch Defense: Krause Variation	r1bqkb1r/ppp1p1pp/2np1n2/5p2/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq -	c2c4 f7f5 b1c3 g8f6 g1f3 b8c6 d2d4 d7d6
A10	English Opening: Adorjan Defense	rnbqkbnr/pppp1p1p/6p1/4p3/2P1P3/8/PP1P1PPP/RNBQKBNR w KQkq -	c2c4 g7g6 e2e4 e7e5
A10	English Opening: Anglo-Dutch Defense, Hickmann Gambit	rnbqkbnr/ppppp1pp/8/5p2/2P1P3/8/PP1P1PPP/RNBQKBNR b KQkq -	c2c4 f7f5 e2e4
A10	English Opening: Anglo-Dutch Defense	rnbqkbnr/ppppp1pp/8/5p2/2P5/8/PP1PPPPP/RNBQKBNR w KQkq -	c2c4 f7f5
A10	English Opening: Anglo-Dutch Variation, Chabanon Gambit	rnbqkbnr/ppp1p1pp/3p4/5p2/2P1P3/5N2/PP1P1PPP/RNBQKB1R b KQkq -	c2c4 f7f5 g1f3 d7d6 e2e4
A10	English Opening: Anglo-Dutch Variation, Ferenc Gambit	rnbqkb1r/ppppp1pp/5n2/5p2/2P1P3/2N5/PP1P1PPP/R1BQKBNR b KQkq -	c2c4 f7f5 b1c3 g8f6 e2e4
A10	English Opening: Anglo-Lithuanian Variation	r1bqkbnr/pppppppp/2n5/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq -	c2c4 b8c6
A10	English Opening: Anglo-Scandinavian Defense, Lohn Gambit	rnbqkbnr/ppp2ppp/4p3/3P4/8/8/PP1PPPPP/RNBQKBNR w KQkq -	c2c4 d7d5 c4d5 e7e6
A10	English Opening: Anglo-Scandinavian Defense, Malvinas Variation	rnb1kbnr/ppp1pppp/8/q7/8/2N5/PP1PPPPP/R1BQKBNR w KQkq -	c2c4 d7d5 c4d5 d8d5 b1c3 d5a5
A10	English Opening: Anglo-Scandinavian Defense	rnbqkbnr/ppp1pppp/8/3p4/2P5/8/PP1PPPPP/RNBQKBNR w KQkq -	c2c4 d7d5
A10	English Opening: Anglo-Scandinavian Defense, Schulz Gambit	rnbqkb1r/ppp1pppp/5n2/3P4/8/8/PP1PPPPP/RNBQKBNR w KQkq -	c2c4 d7d5 c4d5 g8f6
A10	English Opening: Great Snake Variation	rnbqkbnr/pppppp1p/6p1/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq -	c2c4 g7g6
A10	English Opening: Jaenisch Gambit	rnbqkbnr/p1pppppp/8/1p6/2P5/8/PP1PPPPP/RNBQKBNR w KQkq -	c2c4 b7b5
A10	English Opening: Kings English Variation, Botvinnik System, Prickly Pawn Pass System	rnbq1rk1/1p3pbp/p1pp1np1/4p3/2P1P3/2NP2P1/PP2NPBP/R1BQ1RK1 w - -	c2c4 g7g6 b1c3 f8g7 g2g3 g8f6 f1g2 e8g8 e2e4 d7d6 g1e2 e7e5 e1g1 c7c6 d2d3 a7a6
A10	English Opening: Myers Variation	rnbqk1nr/ppppppbp/8/6p1/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -	c2c4 g7g5 d2d4 f8g7
A10	English Opening: Porcupine Variation	rnbqkb1r/ppppp1pp/5n2/8/2P1p1P1/2N5/PP1P1P1P/R1BQKBNR b KQkq -	c2c4 f7f5 b1c3 g8f6 e2e4 f5e4 g2g4
A10	English Opening	rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq -	c2c4
A10	English Opening: Wade Gambit	rnbqkbnr/ppppp1pp/8/5p2/2P3P1/8/PP1PPP1P/RNBQKBNR b KQkq -	c2c4 f7f5 g2g4
A10	English Opening: Zilbermints Gambit	rnbqkbnr/pppp1p1p/8/4p1p1/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -	c2c4 g7g5 d2d4 e7e5
A10	Kings Indian Defense: Semi-Classical Variation, Exchange Variation	r1bq1rk1/pppn1pbp/5np1/4p3/2P5/2N1PN2/PP2BPPP/R1BQ1RK1 w - -	c2c4 g7g6 b1c3 f8g7 e2e3 g8f6 d2d4 e8g8 g1f3 d7d6 f1e2 b8d7 e1g1 e7e5 d4e5 d6e5
A10	Modern Defense: Averbakh Variation, Pseudo-Sämisch	rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/4BP2/PP4PP/RN1QKBNR b KQkq -	c2c4 g7g6 e2e4 f8g7 d2d4 d7d6 c1e3 g8f6 f2f3
A10	Modern Defense: Neo-Modern Defense	rnbqk1nr/pppp1pbp/6p1/4p3/2PPP3/8/PP3PPP/RNBQKBNR w KQkq -	c2c4 g7g6 e2e4 f8g7 d2d4 e7e5
A11	English Opening: Caro-Kann Defensive System	rnbqkbnr/pp1ppppp/2p5/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq -	c2c4 c7c6
A12	Reti Opening: Anglo-Slav Variation, Bled Variation	rnbqkb1r/pp2pp1p/2p2np1/3p4/2P5/1P3N2/PB1PPPPP/RN1QKB1R w KQkq -	g1f3 d7d5 b2b3 g8f6 c1b2 g7g6 c2c4 c7c6
A12	Reti Opening: Anglo-Slav Variation, Bogoljubov Variation	rn1qkbnr/pp2pppp/2p5/3p4/2P3b1/1P3N2/P2PPPPP/RNBQKB1R w KQkq -	g1f3 d7d5 c2c4 c7c6 b2b3 c8g4
A12	Reti Opening: Anglo-Slav Variation, Bogoljubov Variation	rnbqkb1r/pp2pppp/2p2n2/3p4/2P5/1P3N2/PB1PPPPP/RN1QKB1R b KQkq -	g1f3 g8f6 c2c4 c7c6 b2b3 d7d5 c1b2
A12	Reti Opening: Anglo-Slav Variation, Bogoljubov Variation	rnbqkbnr/pp2pppp/2p5/3p4/2P5/1P3N2/P2PPPPP/RNBQKB1R b KQkq -	g1f3 d7d5 c2c4 c7c6 b2b3
A12	Reti Opening: Anglo-Slav Variation, Capablanca Variation	rn1qkb1r/pp2pppp/2p2n2/3p4/2P3b1/1P3N2/PB1PPPPP/RN1QKB1R w KQkq -	c2c4 g8f6 g1f3 c7c6 b2b3 d7d5 c1b2 c8g4
A12	Reti Opening: Anglo-Slav Variation, London Defensive System	rn1qkb1r/pp2pppp/2p2n2/3p1b2/2P5/1P3NP1/P2PPP1P/RNBQKB1R w KQkq -	c2c4 g8f6 g2g3 c7c6 g1f3 d7d5 b2b3 c8f5
A12	Reti Opening: Anglo-Slav Variation, New York System	rn1qkb1r/pp2pppp/2p2n2/3p1b2/2P5/1P3N2/PB1PPPPP/RN1QKB1R w KQkq -	g1f3 g8f6 c2c4 c7c6 b2b3 d7d5 c1b2 c8f5
A12	Reti Opening: Anglo-Slav Variation, Torre System	rn1qkb1r/pp2pppp/2p2n2/3p4/2P3b1/1P3NP1/P2PPP1P/RNBQKB1R w KQkq -	c2c4 g8f6 g2g3 c7c6 g1f3 d7d5 b2b3 c8g4
A13	English Opening: Agincourt Defense, Bogoljubov Defense	rnbqk2r/ppp2ppp/3bpn2/3p4/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq -	g1f3 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 f8d6
A13	English Opening: Agincourt Defense, Catalan Defense Accepted	rnbqkb1r/ppp2ppp/4pn2/8/2p5/5NP1/PP1PPPBP/RNBQK2R w KQkq -	g1f3 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4
A13	English Opening: Agincourt Defense, Catalan Defense	rn1qkbnr/pbp2ppp/1p2p3/3p4/2P5/5NP1/PP1PPPBP/RNBQ1RK1 b kq -	g1f3 d7d5 c2c4 e7e6 g2g3 b7b6 f1g2 c8b7 e1g1
A13	English Opening: Agincourt Defense, Catalan Defense	rnbqkbnr/pp3ppp/4p3/2pp4/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq -	g1f3 d7d5 c2c4 e7e6 g2g3 c7c5
A13	English Opening: Agincourt Defense, Catalan Defense, Semi-Slav Defense	rnbqkb1r/pp3ppp/2p1pn2/3p4/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq -	g1f3 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 c7c6
A13	English Opening: Agincourt Defense, Kurajica Defense	rnbqkbnr/pp3ppp/2p1p3/3p4/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq -	g1f3 d7d5 c2c4 e7e6 g2g3 c7c6
A13	English Opening: Agincourt Defense	rnbqkbnr/ppp2ppp/4p3/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq -	c2c4 e7e6 g1f3 d7d5
A13	English Opening: Agincourt Defense	rnbqkbnr/pppp1ppp/4p3/8/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq -	c2c4 e7e6 g1f3
A13	English Opening: Agincourt Defense	rnbqkbnr/pppp1ppp/4p3/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq -	c2c4 e7e6
A13	English Opening: Agincourt Defense, Tarrasch Defense	r1bqk2r/pp2bppp/2n1pn2/2pp4/2P5/1P3NP1/P2PPPBP/RNBQ1RK1 w kq -	g1f3 g8f6 c2c4 e7e6 g2g3 d7d5 b2b3 c7c5 f1g2 b8c6 e1g1 f8e7
A13	English Opening: Agincourt Defense, Wimpy System	rnbqkb1r/pp3ppp/4pn2/2pp4/2P5/1P2PN2/PB1P1PPP/RN1QKB1R b KQkq -	g1f3 g8f6 c2c4 e7e6 b2b3 d7d5 c1b2 c7c5 e2e3
A13	English Opening: Neo-Catalan Declined	rnbqk2r/ppp1bppp/4pn2/3p4/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq -	g1f3 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 f8e7
A13	English Opening: Neo-Catalan	rnbqkb1r/ppp2ppp/4pn2/3p4/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq -	g1f3 g8f6 c2c4 e7e6 g2g3 d7d5
A13	English Opening: Romanishin Gambit	rnbqkb1r/2pp1ppp/p3pn2/1p6/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq -	g1f3 g8f6 c2c4 e7e6 g2g3 a7a6 f1g2 b7b5
A13	Horwitz Defense: Zilbermints Gambit	rnbqkbnr/pppp1ppp/8/4p3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -	c2c4 e7e6 d2d4 e6e5
A14	English Opening: Agincourt Defense, Keres Defense	r1bqk2r/pp2bppp/2n1p3/2pn4/8/2N2NP1/PP1PPPBP/R1BQ1RK1 w kq -	c2c4 c7c5 g1f3 g8f6 b1c3 e7e6 g2g3 d7d5 c4d5 f6d5 f1g2 b8c6 e1g1 f8e7
A14	English Opening: Agincourt Defense, Neo-Catalan Declined	rnbqk2r/ppp1bppp/4pn2/3p4/2P5/5NP1/PP1PPPBP/RNBQ1RK1 b kq -	g1f3 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 f8e7 e1g1
A14	Reti Opening: Anglo-Slav Variation, Bogoljubov Variation, Stonewall Line	rnbq1rk1/pp2bppp/2p1pn2/3p4/2P5/1P3NP1/PB1PPPBP/RN1Q1RK1 b - -	g1f3 d7d5 c2c4 e7e6 g2g3 g8f6 f1g2 f8e7 e1g1 e8g8 b2b3 c7c6 c1b2
A15	English Opening: Anglo-Indian Defense, Anti-Anti-Grünfeld	rnbqk2r/ppppppbp/5np1/8/2P1P3/2N2N2/PP1P1PPP/R1BQKB1R b KQkq -	g1f3 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4
A15	English Opening: Anglo-Indian Defense, Kings Indian Formation, Double Fianchetto	rn1qkb1r/pbpppp1p/1p3np1/8/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq -	g1f3 g8f6 c2c4 b7b6 g2g3 c8b7 f1g2 g7g6
A15	English Opening: Anglo-Indian Defense, Kings Indian Formation	rnbqkb1r/pppppp1p/5np1/8/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq -	g1f3 g8f6 c2c4 g7g6
A15	English Opening: Anglo-Indian Defense, Kings Knight Variation	rnbqkb1r/pppppppp/5n2/8/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq -	g1f3 g8f6 c2c4
A15	English Opening: Anglo-Indian Defense, Old Indian Formation	rnbqkb1r/ppp1pppp/3p1n2/8/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq -	g1f3 g8f6 c2c4 d7d6
A15	English Opening: Anglo-Indian Defense, Queens Indian Formation	rn1qkb1r/pbpp1ppp/1p2pn2/8/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq -	g1f3 g8f6 c2c4 e7e6 g2g3 b7b6 f1g2 c8b7
A15	English Opening: Anglo-Indian Defense, Queens Indian Formation	rnbqkb1r/p1pppppp/1p3n2/8/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq -	g1f3 g8f6 c2c4 b7b6
A15	English Opening: Anglo-Indian Defense	rnbqkb1r/pppppppp/5n2/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq -	c2c4 g8f6
A15	English Opening: Anglo-Indian Defense, Romanishin Variation	rnbqkb1r/1ppp1ppp/p3pn2/8/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq -	g1f3 g8f6 c2c4 e7e6 g2g3 a7a6
A15	English Opening: Anglo-Indian Defense, Scandinavian Defense, Exchange Variation	rnbqkb1r/ppp1pppp/8/3n4/8/5N2/PP1PPPPP/RNBQKB1R w KQkq -	g1f3 g8f6 c2c4 d7d5 c4d5 f6d5
A15	English Opening: Anglo-Indian Defense, Scandinavian Defense	rnbqkb1r/ppp1pppp/5n2/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq -	g1f3 g8f6 c2c4 d7d5
A15	English Opening: Anglo-Indian Defense, Slav Formation	rnbqkb1r/pp1ppp1p/2p2np1/8/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq -	g1f3 g8f6 c2c4 g7g6 g2g3 c7c6
A15	English Orangutan	rnbqkb1r/pppppppp/5n2/8/1PP5/8/P2PPPPP/RNBQKBNR b KQkq -	c2c4 g8f6 b2b4
A15	Polish Opening: Kings Indian Variation, Sokolsky Attack	rnbq1rk1/ppp1ppbp/3p1np1/8/1PPP4/4PN2/PB3PPP/RN1QKB1R b KQ -	g1f3 g8f6 c2c4 g7g6 b2b4 f8g7 c1b2 e8g8 e2e3 d7d6 d2d4
A16	English Opening: Anglo-Grunfeld Defense: Korchnoi Variation	rnbqk2r/ppp2pbp/6p1/3np3/8/2N2NP1/PP1PPPBP/R1BQK2R w KQkq -	g1f3 g8f6 c2c4 g7g6 b1c3 d7d5 c4d5 f6d5 g2g3 f8g7 f1g2 e7e5
A16	English Opening: Anglo-Grunfeld Defense	rnbqkb1r/ppp1pppp/5n2/3p4/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq -	c2c4 g8f6 b1c3 d7d5
A16	English Opening: Anglo-Indian Defense, Anglo-Grünfeld Variation	rnbqkb1r/ppp1pp1p/1n4p1/8/8/2N3P1/PP1PPPBP/R1BQK1NR w KQkq -	c2c4 g8f6 b1c3 d7d5 c4d5 f6d5 g2g3 g7g6 f1g2 d5b6
A16	English Opening: Anglo-Indian Defense, Anglo-Grünfeld Variation	rnbqkb1r/ppp1pp1p/6p1/8/8/2n3P1/PP1PPPBP/R1BQK1NR w KQkq -	c2c4 g8f6 b1c3 d7d5 c4d5 f6d5 g2g3 g7g6 f1g2 d5c3
A16	English Opening: Anglo-Indian Defense, Anglo-Grünfeld Variation	rnbqkb1r/ppp1pppp/8/3n4/8/2N2N2/PP1PPPPP/R1BQKB1R b KQkq -	c2c4 g8f6 b1c3 d7d5 c4d5 f6d5 g1f3
A16	English Opening: Anglo-Indian Defense, Queens Knight Variation	rnbqkb1r/pppppppp/5n2/8/2P5/2N5/PP1PPPPP/R1BQKBNR b KQkq -	c2c4 g8f6 b1c3
A17	English Opening: Anglo-Indian Defense, Hedgehog System	rnbqkb1r/pppp1ppp/4pn2/8/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq -	c2c4 g8f6 b1c3 e7e6
A17	English Opening: Anglo-Indian Defense, Nimzo-English	rnbqk2r/pppp1ppp/4pn2/8/1bP5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq -	g1f3 g8f6 c2c4 e7e6 b1c3 f8b4
A17	English Opening: Anglo-Indian Defense, Queens Indian Formation	rnbqkb1r/p1pp1ppp/1p2pn2/8/2P5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq -	c2c4 g8f6 b1c3 e7e6 g1f3 b7b6
A17	English Opening: Anglo-Indian Defense, Queens Indian Variation	rn1qkb1r/pbpp1ppp/1p2pn2/8/2P1P3/2NB1N2/PP1P1PPP/R1BQK2R b KQkq -	c2c4 g8f6 b1c3 e7e6 g1f3 b7b6 e2e4 c8b7 f1d3
A17	English Opening: Anglo-Indian Defense, Zvjaginsev-Krasenkow Attack	rnbqk2r/pppp1ppp/4pn2/8/1bP3P1/2N2N2/PP1PPP1P/R1BQKB1R b KQkq -	c2c4 g8f6 b1c3 e7e6 g1f3 f8b4 g2g4
A18	English Opening: Mikenas-Carls Variation	r1bqkb1r/pppp1ppp/2n1pn2/8/2P1P3/2N5/PP1P1PPP/R1BQKBNR w KQkq -	c2c4 g8f6 b1c3 e7e6 e2e4 b8c6
A18	English Opening: Mikenas-Carls Variation	rnbqkb1r/ppp2ppp/4pn2/3pP3/2P5/2N5/PP1P1PPP/R1BQKBNR b KQkq -	c2c4 g8f6 b1c3 e7e6 e2e4 d7d5 e4e5
A18	English Opening: Mikenas-Carls Variation	rnbqkb1r/pppp1ppp/4pn2/8/2P1P3/2N5/PP1P1PPP/R1BQKBNR b KQkq -	c2c4 g8f6 b1c3 e7e6 e2e4
A19	English Opening: Anglo-Indian Defense, Flohr-Mikenas-Carls Variation, Nei Gambit	rnbqkbnr/pp1p1ppp/4p3/2p1P3/2P5/2N5/PP1P1PPP/R1BQKBNR w KQkq -	c2c4 g8f6 b1c3 e7e6 e2e4 c7c5 e4e5 f6g8
A19	English Opening: Mikenas-Carls, Sicilian	rnbqkb1r/pp1p1ppp/4pn2/2p5/2P1P3/2N5/PP1P1PPP/R1BQKBNR w KQkq -	c2c4 g8f6 b1c3 e7e6 e2e4 c7c5
A20	English Opening: Drill Variation	rnbqkbnr/pppp1pp1/8/4p2p/2P5/6P1/PP1PPP1P/RNBQKBNR w KQkq -	c2c4 e7e5 g2g3 h7h5
A20	English Opening: Kings English Variation, Nimzowitsch-Flohr Variation	rnbqkbnr/pppp1ppp/8/8/2P1p3/5N2/PP1PPPPP/RNBQKB1R w KQkq -	c2c4 e7e5 g1f3 e5e4
A20	English Opening: Kings English Variation, Nimzowitsch Variation	rnbqkbnr/pppp1ppp/8/4p3/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq -	c2c4 e7e5 g1f3
A20	English Opening: Kings English Variation	rnbqkbnr/pppp1ppp/8/4p3/2P5/8/PP1PPPPP/RNBQKBNR w KQkq -	c2c4 e7e5
A20	English Opening: Kings English, Kahiko-Hula Gambit	rnbqkb1r/pppp1ppp/5n2/8/2P2p2/4PN2/PP1P2PP/RNBQKB1R b KQkq -	c2c4 e7e5 e2e3 g8f6 f2f4 e5f4 g1f3
A21	English Opening: Kings English Variation, Keres Defense	rnbqkbnr/pp3ppp/2pp4/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq -	c2c4 e7e5 b1c3 d7d6 g2g3 c7c6
A21	English Opening: Kings English Variation, Kramnik-Shirov Counterattack	rnbqk1nr/pppp1ppp/8/4p3/1bP5/2N5/PP1PPPPP/R1BQKBNR w KQkq -	c2c4 e7e5 b1c3 f8b4
A21	English Opening: Kings English Variation, Reversed Sicilian	rnbqkbnr/pppp1ppp/8/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR b KQkq -	c2c4 e7e5 b1c3
A21	English Opening: Kings English Variation	rnbqkbnr/ppp2ppp/3p4/4p3/2P5/2N2N2/PP1PPPPP/R1BQKB1R b KQkq -	c2c4 e7e5 b1c3 d7d6 g1f3
A21	English Opening: Kings English Variation, Smyslov Defense	rn1qkbnr/ppp2ppp/3p4/4p3/2P3b1/2N2N2/PP1PPPPP/R1BQKB1R w KQkq -	c2c4 e7e5 b1c3 d7d6 g1f3 c8g4
A21	English Opening: Kings English Variation, Troger Defense	r2qkbnr/ppp2ppp/2npb3/4p3/2P5/2N3P1/PP1PPPBP/R1BQK1NR w KQkq -	c2c4 e7e5 b1c3 b8c6 g2g3 d7d6 f1g2 c8e6
A22	English Opening: Carls-Bremen System	rnbqkb1r/pppp1ppp/5n2/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR b KQkq -	c2c4 e7e5 b1c3 g8f6 g2g3
A22	English Opening: Kings English, Erbenheimer Gambit	rnbqkb1r/pppp1ppp/8/6N1/2P1p1n1/2N5/PP1PPPPP/R1BQKB1R w KQkq -	c2c4 e7e5 b1c3 g8f6 g1f3 e5e4 f3g5 f6g4
A22	English Opening: Kings English, Mazedonisch	rnbqkb1r/pppp1ppp/5n2/4p3/2P2P2/2N5/PP1PP1PP/R1BQKBNR b KQkq -	c2c4 e7e5 b1c3 g8f6 f2f4
A22	English Opening: Kings English Variation, Bellon Gambit	rnbqkb1r/p1pp1ppp/5n2/1p4N1/2P1p3/2N5/PP1PPPPP/R1BQKB1R w KQkq -	c2c4 e7e5 b1c3 g8f6 g1f3 e5e4 f3g5 b7b5
A22	English Opening: Kings English Variation, Two Knights Variation, Reversed Dragon	rnbqkb1r/ppp2ppp/5n2/3pp3/2P5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq -	c2c4 e7e5 b1c3 g8f6 g2g3 d7d5
A22	English Opening: Kings English Variation, Two Knights Variation	rnbqkb1r/pppp1ppp/5n2/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq -	c2c4 e7e5 b1c3 g8f6
A22	English Opening: Kings English Variation, Two Knights Variation, Smyslov System	rnbqk2r/pppp1ppp/5n2/4p3/1bP5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq -	c2c4 e7e5 b1c3 g8f6 g2g3 f8b4
A23	English Opening: Kings English Variation, Two Knights Variation, Keres Variation	rnbqkb1r/pp1p1ppp/2p2n2/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq -	c2c4 e7e5 b1c3 g8f6 g2g3 c7c6
A24	English Opening: Kings English Variation, Two Knights Variation, Fianchetto Line	rnbqkb1r/pppp1p1p/5np1/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq -	c2c4 e7e5 b1c3 g8f6 g2g3 g7g6
A25	English Opening: Closed, Taimanov Variation	r1bqk2r/ppp2pbp/2np2pn/4p3/2P5/2N1P1P1/PP1PNPBP/R1BQK2R w KQkq -	c2c4 e7e5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 e2e3 d7d6 g1e2 g8h6
A25	English Opening: Closed, Taimanov Variation	r1bqk2r/pppp1pbp/2n3pn/4p3/2P5/2N3P1/PP1PPPBP/1RBQK1NR w Kkq -	c2c4 e7e5 b1c3 b8c6 g2g3 g7g6 a1b1 g8h6 f1g2 f8g7
A25	English Opening: Kings English Variation, Bremen-Hort Variation	r2qk1nr/ppp2pbp/2npb1p1/4p3/2P5/2N1P1P1/PP1PNPBP/R1BQK2R w KQkq -	c2c4 e7e5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 e2e3 d7d6 g1e2 c8e6
A25	English Opening: Kings English Variation, Closed System	r1bqk1nr/pppp1pbp/2n3p1/4p3/2P5/2NP2P1/PP2PPBP/R1BQK1NR b KQkq -	c2c4 e7e5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 d2d3
A25	English Opening: Kings English Variation, Hungarian Attack	r1bqk1nr/pppp1pbp/2n3p1/4p3/2P5/2N3P1/PP1PPPBP/1RBQK1NR b Kkq -	c2c4 e7e5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 a1b1
A25	English Opening: Kings English Variation, Reversed Closed Sicilian	r1bqkbnr/pppp1ppp/2n5/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq -	c2c4 e7e5 b1c3 b8c6
A25	English Opening: Kings English Variation, Taimanov Variation	r1bqk1nr/pppp1pbp/2n3p1/4p3/2P5/2N3P1/PP1PPPBP/R1BQK1NR w KQkq -	c2c4 e7e5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7
A26	English Opening: Kings English Variation, Botvinnik System	r1bqk1nr/ppp2pbp/2np2p1/4p3/2P1P3/2NP2P1/PP3PBP/R1BQK1NR b KQkq -	c2c4 e7e5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 d2d3 d7d6 e2e4
A26	English Opening: Kings English Variation, Closed System, Full Symmetry	r1bqk1nr/ppp2pbp/2np2p1/4p3/2P5/2NP2P1/PP2PPBP/R1BQK1NR w KQkq -	c2c4 e7e5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 d2d3 d7d6
A27	English Opening: Kings English Variation, Three Knights System	r1bqkbnr/pppp1ppp/2n5/4p3/2P5/2N2N2/PP1PPPPP/R1BQKB1R b KQkq -	c2c4 e7e5 b1c3 b8c6 g1f3
A28	English Opening: Four Knights System, Nimzowitsch Variation	r1bqkb1r/pppp1ppp/2n2n2/4p3/2P1P3/2N2N2/PP1P1PPP/R1BQKB1R b KQkq -	c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 e2e4
A28	English Opening: Kings English Variation, Four Knights Variation, Bradley Beach Variation	r1bqkb1r/pppp1ppp/2n2n2/8/2PPp3/2N2N2/PP2PPPP/R1BQKB1R w KQkq -	c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 d2d4 e5e4
A28	English Opening: Kings English Variation, Four Knights Variation, Flexible Line	r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2NP1N2/PP2PPPP/R1BQKB1R b KQkq -	c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 d2d3
A28	English Opening: Kings English Variation, Four Knights Variation, Korchnoi Line	r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/P1N2N2/1P1PPPPP/R1BQKB1R b KQkq -	c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 a2a3
A28	English Opening: Kings English Variation, Four Knights Variation, Quiet Line	r1bqk2r/pppp1ppp/2n2n2/4p3/2P5/2b1PN2/PPQP1PPP/R1B1KB1R w KQkq -	c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 e2e3 f8b4 d1c2 b4c3
A28	English Opening: Kings English Variation, Four Knights Variation, Quiet Line	r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2N1PN2/PP1P1PPP/R1BQKB1R b KQkq -	c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 e2e3
A28	English Opening: Kings English Variation, Four Knights Variation, Quiet Line	r1bqr1k1/pppp1ppp/2n2n2/3NpQ2/1bP5/4PN2/PP1P1PPP/R1B1KB1R b KQ -	c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 e2e3 f8b4 d1c2 e8g8 c3d5 f8e8 c2f5
A28	English Opening: Kings English Variation, Four Knights Variation	r1bqk2r/pppp1pp1/5n1p/4n3/2PN3B/2P5/P3PPPP/R2QKB1R w KQkq -	c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 d2d4 e5d4 f3d4 f8b4 c1g5 h7h6 g5h4 b4c3 b2c3 c6e5
A28	English Opening: Kings English Variation, Four Knights Variation	r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq -	c2c4 e7e5 b1c3 g8f6 g1f3 b8c6
A29	English Opening: Kings English Variation, Four Knights Variation, Fianchetto Line	r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2N2NP1/PP1PPP1P/R1BQKB1R b KQkq -	c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 g2g3
A30	English Opening: Symmetrical, Hedgehog, Flexible Formation	r2qk2r/1b1nbppp/pp1ppn2/8/2PQ4/1PN2NP1/P3PPBP/R1BR2K1 w kq -	g1f3 c7c5 c2c4 g8f6 b1c3 e7e6 g2g3 b7b6 f1g2 c8b7 e1g1 f8e7 d2d4 c5d4 d1d4 d7d6 f1d1 a7a6 b2b3 b8d7
A30	English Opening: Symmetrical Variation, Hedgehog Defense	rn1qk2r/pb1pbppp/1p2pn2/2p5/2P5/2N2NP1/PP1PPPBP/R1BQ1RK1 w kq -	g1f3 g8f6 c2c4 c7c5 b1c3 e7e6 g2g3 b7b6 f1g2 c8b7 e1g1 f8e7
A30	English Opening: Symmetrical Variation, Napolitano Gambit	rnbqkb1r/pp1ppppp/5n2/2p5/1PP5/5N2/P2PPPPP/RNBQKB1R b KQkq -	c2c4 c7c5 g1f3 g8f6 b2b4
A30	English Opening: Symmetrical Variation	rnbqkbnr/pp1ppppp/8/2p5/2P5/8/PP1PPPPP/RNBQKBNR w KQkq -	c2c4 c7c5
A30	English Opening: Wing Gambit	rnbqkbnr/pp1ppppp/8/2p5/1PP5/8/P2PPPPP/RNBQKBNR b KQkq -	c2c4 c7c5 b2b4
A31	English Opening: Symmetrical Variation, Anti-Benoni Variation	rnbqkb1r/pp1ppppp/5n2/2p5/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq -	d2d4 g8f6 c2c4 c7c5 g1f3
A32	English Opening: Symmetrical Variation, Anti-Benoni Variation, Spielmann Defense	rnbqkb1r/pp1p1ppp/4pn2/8/2PN4/8/PP2PPPP/RNBQKB1R w KQkq -	d2d4 g8f6 c2c4 c7c5 g1f3 c5d4 f3d4 e7e6
A33	English Opening: Symmetrical Variation, Anti-Benoni Variation, Geller Variation	r1b1kb1r/pp1p1ppp/1qn1pn2/8/2PN4/2N3P1/PP2PP1P/R1BQKB1R w KQkq -	g1f3 g8f6 c2c4 c7c5 b1c3 b8c6 d2d4 c5d4 f3d4 e7e6 g2g3 d8b6
A33	English Opening: Symmetrical Variation, Anti-Benoni Variation, Spielmann Defense	r1bqkb1r/pp1p1ppp/2n1pn2/8/2PN4/2N5/PP2PPPP/R1BQKB1R w KQkq -	g1f3 g8f6 c2c4 c7c5 b1c3 b8c6 d2d4 c5d4 f3d4 e7e6
A34	English Opening: Symmetrical Variation, Fianchetto Variation	rnbqkb1r/pp1ppppp/5n2/2p5/2P5/2N3P1/PP1PPP1P/R1BQKBNR b KQkq -	c2c4 g8f6 b1c3 c7c5 g2g3
A34	English Opening: Symmetrical Variation, Normal Variation	rnbqkbnr/pp1ppppp/8/2p5/2P5/2N5/PP1PPPPP/R1BQKBNR b KQkq -	c2c4 c7c5 b1c3
A34	English Opening: Symmetrical Variation, Rubinstein Variation	rnbqkb1r/ppn1pppp/8/2p5/8/2N3P1/PP1PPPBP/R1BQK1NR w KQkq -	c2c4 g8f6 b1c3 c7c5 g2g3 d7d5 c4d5 f6d5 f1g2 d5c7
A34	English Opening: Symmetrical Variation, Three Knights Variation	rnbqkb1r/pp2pppp/8/2pn4/8/2N2N2/PP1PPPPP/R1BQKB1R w KQkq -	g1f3 g8f6 c2c4 c7c5 b1c3 d7d5 c4d5 f6d5
A35	English Opening: Symmetrical Variation, Four Knights Variation	r1bqkb1r/pp1ppppp/2n2n2/2p5/2P5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq -	g1f3 g8f6 c2c4 c7c5 b1c3 b8c6
A35	English Opening: Symmetrical Variation, Two Knights Variation	r1bqkbnr/pp1ppppp/2n5/2p5/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq -	c2c4 c7c5 b1c3 b8c6
A36	English Opening: Symmetrical Variation, Botvinnik System	r1bqk1nr/pp1pppbp/2n3p1/2p5/2P1P3/2N3P1/PP1P1PBP/R1BQK1NR b KQkq -	e2e4 c7c5 c2c4 b8c6 b1c3 g7g6 g2g3 f8g7 f1g2
A36	English Opening: Symmetrical Variation, Botvinnik System Reversed	r1bqk1nr/pp1p1pbp/2n3p1/2p1p3/2P5/2N1P1P1/PP1P1PBP/R1BQK1NR w KQkq -	c2c4 c7c5 b1c3 g7g6 g2g3 f8g7 f1g2 b8c6 e2e3 e7e5
A36	English Opening: Symmetrical Variation, Fianchetto Variation	r1bqkbnr/pp1ppppp/2n5/2p5/2P5/2N3P1/PP1PPP1P/R1BQKBNR b KQkq -	c2c4 c7c5 b1c3 b8c6 g2g3
A36	English Opening: Symmetrical Variation, Symmetrical Variation	r1bqk1nr/pp1pppbp/2n3p1/2p5/2P5/2N3P1/PP1PPPBP/R1BQK1NR w KQkq -	c2c4 c7c5 g2g3 g7g6 f1g2 f8g7 b1c3 b8c6
A37	English Opening: Symmetrical Variation, Botvinnik System Reversed	r1bqk1nr/pp1p1pbp/2n3p1/2p1p3/2P5/2N2NP1/PP1PPPBP/R1BQK2R w KQkq -	g1f3 c7c5 c2c4 b8c6 b1c3 e7e5 g2g3 g7g6 f1g2 f8g7
A37	English Opening: Symmetrical Variation, Two Knights Line	r1bqk1nr/pp1pppbp/2n3p1/2p5/2P5/2N2NP1/PP1PPPBP/R1BQK2R b KQkq -	c2c4 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 g1f3
A38	English Opening: Symmetrical Variation, Double Fianchetto	r1bq1rk1/pp1pppbp/2n2np1/2p5/2P5/1PN2NP1/P2PPPBP/R1BQ1RK1 b - -	c2c4 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 g1f3 g8f6 e1g1 e8g8 b2b3
A38	English Opening: Symmetrical Variation, Duchamp Variation	r1bq1rk1/pp1pppbp/2n2np1/2p5/2P5/2NP1NP1/PP2PPBP/R1BQ1RK1 b - -	g1f3 g8f6 g2g3 g7g6 f1g2 f8g7 e1g1 e8g8 c2c4 c7c5 b1c3 b8c6 d2d3
A38	English Opening: Symmetrical Variation, Full Symmetry Line	r1bqk2r/pp1pppbp/2n2np1/2p5/2P5/2N2NP1/PP1PPPBP/R1BQK2R w KQkq -	g1f3 g8f6 c2c4 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7
A39	English Opening: Symmetrical Variation, Mecking Variation	r1bq1rk1/pp1pppbp/2n2np1/2p5/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 b - -	g1f3 g8f6 c2c4 c7c5 b1c3 b8c6 g2g3 g7g6 f1g2 f8g7 e1g1 e8g8 d2d4
A40	Australian Defense	r1bqkbnr/pppppppp/n7/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -	d2d4 b8a6
A40	Benoni Defense: Franco-Sicilian Hybrid	rnbqk2r/pp2npbp/3p2p1/2pP4/4P3/2N2N2/PP3PPP/R1BQKB1R w KQkq -	d2d4 e7e6 c2c4 c7c5 d4d5 e6d5 c4d5 d7d6 b1c3 g7g6 e2e4 f8g7 g1f3 g8e7
A40	Borg Defense: Borg Gambit	rnbqkbnr/pppppp1p/8/6p1/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -	d2d4 g7g5
A40	Colle System: Pterodactyl Variation	rnb1k1nr/pp1pppbp/6p1/q1p5/3P4/3BPN2/PPP2PPP/RNBQK2R w KQkq -	d2d4 g7g6 g1f3 f8g7 e2e3 c7c5 f1d3 d8a5
A40	Colle System: Siroccopteryx Variation	rnb1k1nr/pp1pppbp/6p1/q7/3N4/3BP3/PPP2PPP/RNBQK2R w KQkq -	d2d4 g7g6 g1f3 f8g7 e2e3 c7c5 f1d3 c5d4 f3d4 d8a5
A40	Dutch Defense: Senechaud Gambit	rnbqkbnr/pppp2pp/4p3/5p2/3P1BP1/8/PPP1PP1P/RN1QKBNR b KQkq -	d2d4 e7e6 c1f4 f7f5 g2g4
A40	Dutch Defense: Stonewall Variation, Modern Variation	rnbqk2r/pp4pp/2pbpn2/3p1p2/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w kq -	d2d4 e7e6 g1f3 f7f5 g2g3 g8f6 f1g2 d7d5 e1g1 f8d6 c2c4 c7c6
A40	English Defense: Blumenfeld-Hiva Gambit	rnbqkbnr/p2p2pp/4p3/1PpP1p2/4P3/8/PP3PPP/RNBQKBNR w KQkq -	d2d4 b7b6 c2c4 c7c5 d4d5 e7e6 e2e4 b6b5 c4b5 f7f5
A40	English Defense: Eastbourne Gambit	rn1qkbnr/pbpp1ppp/1p6/4p3/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq -	d2d4 b7b6 c2c4 c8b7 b1c3 e7e5
A40	English Defense: Hartlaub Gambit Accepted	rn1qkb1r/pbpp2pp/1p2pn2/5P2/2PP4/2N5/PP3PPP/R1BQKBNR w KQkq -	c2c4 e7e6 d2d4 b7b6 b1c3 c8b7 e2e4 f7f5 e4f5 g8f6
A40	English Defense: Hartlaub Gambit Declined	rn1qkbnr/pbpp2pp/1p2p3/3P1p2/2P1P3/2N5/PP3PPP/R1BQKBNR b KQkq -	c2c4 e7e6 d2d4 b7b6 b1c3 c8b7 e2e4 f7f5 d4d5
A40	English Defense: Perrin Variation	r2qkbnr/pbpp1ppp/1pn1p3/8/2PPP3/3B4/PP3PPP/RNBQK1NR w KQkq -	d2d4 e7e6 c2c4 b7b6 e2e4 c8b7 f1d3 b8c6
A40	English Defense: Poli Gambit	rn1qkb1r/pbpp2pp/1p2p2n/5P2/2PP4/5P2/PP4PP/RNBQKBNR w KQkq -	d2d4 e7e6 c2c4 b7b6 e2e4 c8b7 f2f3 f7f5 e4f5 g8h6
A40	English Defense	rnbqkbnr/p1pp1ppp/1p2p3/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 e7e6 c2c4 b7b6
A40	English Defense	rnbqkbnr/p1pppppp/1p6/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -	d2d4 b7b6
A40	Englund Gambit Complex Declined: Diemer Counterattack	rnb1k1nr/pppp1ppp/8/2bPp3/4P2q/8/PPP2PPP/RNBQKBNR w KQkq -	d2d4 e7e5 d4d5 f8c5 e2e4 d8h4
A40	Englund Gambit Complex Declined	rnbqkbnr/pppp1ppp/8/3Pp3/8/8/PPP1PPPP/RNBQKBNR b KQkq -	d2d4 e7e5 d4d5
A40	Englund Gambit Complex: Englund Gambit	r1b1kbnr/ppppqppp/2n5/4P3/8/5N2/PPP1PPPP/RNBQKB1R w KQkq -	d2d4 e7e5 d4e5 b8c6 g1f3 d8e7
A40	Englund Gambit Complex: Felbecker Gambit	r1bqk1nr/pppp1ppp/2n5/2b1P3/8/5N2/PPP1PPPP/RNBQKB1R w KQkq -	d2d4 e7e5 d4e5 b8c6 g1f3 f8c5
A40	Englund Gambit Complex: Hartlaub-Charlick Gambit	rnbqkbnr/ppp2ppp/3p4/4P3/8/8/PPP1PPPP/RNBQKBNR w KQkq -	d2d4 e7e5 d4e5 d7d6
A40	Englund Gambit Complex: Mosquito Gambit	rnb1kbnr/pppp1ppp/8/4P3/7q/8/PPP1PPPP/RNBQKBNR w KQkq -	d2d4 e7e5 d4e5 d8h4
A40	Englund Gambit Complex: Soller Gambit Deferred	r1bqkbnr/pppp2pp/2n2p2/4P3/8/5N2/PPP1PPPP/RNBQKB1R w KQkq -	d2d4 e7e5 d4e5 b8c6 g1f3 f7f6
A40	Englund Gambit Complex: Soller Gambit	rnbqkbnr/pppp2pp/5p2/4P3/8/8/PPP1PPPP/RNBQKBNR w KQkq -	d2d4 e7e5 d4e5 f7f6
A40	Englund Gambit Complex: Stockholm Variation	r1b1kbnr/ppppqppp/2n5/3QP3/8/5N2/PPP1PPPP/RNB1KB1R b KQkq -	d2d4 e7e5 d4e5 b8c6 g1f3 d8e7 d1d5
A40	Englund Gambit Complex: Zilbermints Gambit	r1bqkb1r/ppppnppp/2n5/4P3/8/5N2/PPP1PPPP/RNBQKB1R w KQkq -	d2d4 e7e5 d4e5 b8c6 g1f3 g8e7
A40	Englund Gambit Complex: Zilbermints Gambit	r1bqkbnr/pppp1pp1/2n4p/4P3/8/5N2/PPP1PPPP/RNBQKB1R w KQkq -	d2d4 e7e5 d4e5 b8c6 g1f3 h7h6
A40	Englund Gambit Declined: Reversed Alekhine	rnbqkbnr/pppp1ppp/8/4p3/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq -	d2d4 e7e5 g1f3
A40	Englund Gambit Declined: Reversed Brooklyn	rnbqkbnr/pppp1ppp/8/8/3Pp3/8/PPP1PPPP/RNBQKBNR b KQkq -	d2d4 e7e5 g1f3 e5e4 f3g1
A40	Englund Gambit Declined: Reversed Krebs	rnbqkbnr/pppp1ppp/8/8/3Pp3/5N2/PPP1PPPP/RNBQKB1R w KQkq -	d2d4 e7e5 g1f3 e5e4
A40	Englund Gambit Declined: Reversed Mokele Mbembe	rnbqkbnr/pppp1ppp/8/4N3/3Pp3/8/PPP1PPPP/RNBQKB1R b KQkq -	d2d4 e7e5 g1f3 e5e4 f3e5
A40	Englund Gambit	rnbqkbnr/pppp1ppp/8/4p3/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -	d2d4 e7e5
A40	Horwitz Defense	rnbqkbnr/pppp1ppp/4p3/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -	d2d4 e7e6
A40	Kangaroo Defense: Keres Defense, Transpositional Variation	rnbqk1nr/pppp1ppp/4p3/8/1bPP4/2N5/PP2PPPP/R1BQKBNR b KQkq -	d2d4 e7e6 c2c4 f8b4 b1c3
A40	Kangaroo Defense	rnbqk1nr/pppp1ppp/4p3/8/1bPP4/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 e7e6 c2c4 f8b4
A40	Mikenas Defense: Cannstatter Variation	r1bqkbnr/pppp1ppp/8/3Pp3/2Pn4/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 b8c6 c2c4 e7e5 d4d5 c6d4
A40	Mikenas Defense: Lithuanian Variation	r1bqkbnr/ppppnppp/8/3Pp3/2P5/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 b8c6 c2c4 e7e5 d4d5 c6e7
A40	Mikenas Defense: Pozarek Gambit	r1bqkbnr/pppp1ppp/8/8/2n5/2N5/PP2PPPP/R1BQKBNR w KQkq -	d2d4 b8c6 c2c4 e7e5 d4e5 c6e5 b1c3 e5c4
A40	Mikenas Defense	r1bqkbnr/pppppppp/2n5/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -	d2d4 b8c6
A40	Modern Defense: Beefeater Variation	rnbqk1nr/pp1pp2p/6p1/2pP1p2/2P5/2P5/P3PPPP/R1BQKBNR w KQkq -	d2d4 g7g6 c2c4 f8g7 b1c3 c7c5 d4d5 g7c3 b2c3 f7f5
A40	Modern Defense: Lizard Defense, Pirc-Diemer Gambit	rnbqkb1r/pppppp1p/5np1/7P/3P4/8/PPP1PPP1/RNBQKBNR b KQkq -	d2d4 g7g6 h2h4 g8f6 h4h5
A40	Modern Defense	rnbqkbnr/pppppp1p/6p1/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -	d2d4 g7g6
A40	Montevideo Defense	rnbqkbnr/pppppppp/8/3P4/8/8/PPP1PPPP/RNBQKBNR w KQkq -	d2d4 b8c6 d4d5 c6b8
A40	Polish Defense	rnbqkbnr/p1pppppp/8/1p6/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -	d2d4 b7b5
A40	Polish Defense: Spassky Gambit Accepted	rn1qkbnr/pbpppppp/8/1B6/3PP3/8/PPP2PPP/RNBQK1NR b KQkq -	d2d4 b7b5 e2e4 c8b7 f1b5
A40	Pterodactyl Defense: Central, Benoni Beefeater Pterodactyl	rnb1k1nr/pp2pp1p/3p2p1/q1pP4/2P1P3/2P5/P4PPP/R1BQKBNR w KQkq -	d2d4 g7g6 c2c4 f8g7 b1c3 c7c5 d4d5 d7d6 e2e4 g7c3 b2c3 d8a5
A40	Pterodactyl Defense: Central, Benoni Pterodactyl	rnb1k1nr/pp1pppbp/6p1/q1pP4/2P1P3/8/PP3PPP/RNBQKBNR w KQkq -	d2d4 g7g6 c2c4 f8g7 e2e4 c7c5 d4d5 d8a5
A40	Pterodactyl Defense: Fianchetto, Queen Benoni Pterodactyl	rnb1k1nr/pp1pppbp/6p1/q1pP4/2P5/2N5/PP2PPPP/R1BQKBNR w KQkq -	d2d4 g7g6 c2c4 f8g7 b1c3 c7c5 d4d5 d8a5
A40	Pterodactyl Defense: Fianchetto, Queen Pteranodon	rnb1k1nr/pp1ppp1p/6p1/q1pP4/2P5/2P5/P3PPPP/R1BQKBNR w KQkq -	d2d4 g7g6 c2c4 f8g7 b1c3 c7c5 d4d5 g7c3 b2c3 d8a5
A40	Pterodactyl Defense: Fianchetto, Queen Pterodactyl	rnb1k1nr/pp1pppbp/6p1/q1p5/3P4/5NP1/PPP1PPBP/RNBQK2R w KQkq -	d2d4 g7g6 g1f3 f8g7 g2g3 c7c5 f1g2 d8a5
A40	Pterodactyl Defense: Queen Pterodactyl, Quiet Line	rnbqk1nr/pp1pppbp/6p1/2p5/2PP4/2N1P3/PP3PPP/R1BQKBNR b KQkq -	d2d4 g7g6 c2c4 f8g7 b1c3 c7c5 e2e3
A40	Queens Pawn Game: Anglo-Slav Opening	rnbqkbnr/pp2pppp/2pp4/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 c7c6 c2c4 d7d6
A40	Queens Pawn Game: Englund Gambit	r1b1kb1r/ppppq1pp/2n2n2/3Q4/8/5N2/PPP1PPPP/RNB1KB1R w KQkq -	d2d4 e7e5 d4e5 b8c6 g1f3 d8e7 d1d5 f7f6 e5f6 g8f6
A40	Queens Pawn Game: London System, Pterodactyl Variation	rnb1k1nr/pp1pppbp/6p1/q7/3P1B2/5N2/PP2PPPP/RN1QKB1R w KQkq -	d2d4 g7g6 g1f3 f8g7 c1f4 c7c5 c2c3 c5d4 c3d4 d8a5
A40	Queens Pawn Game: Veresov Attack, Fianchetto Defense	rnbqk1nr/ppp1ppbp/6p1/3p4/3P4/2N2N2/PPP1PPPP/R1BQKB1R w KQkq -	d2d4 g7g6 g1f3 f8g7 b1c3 d7d5
A40	Queens Pawn	rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq -	d2d4
A40	Slav Indian: Kudischewitsch Gambit	rnbqkb1r/p2ppppp/2p2n2/1p6/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq -	d2d4 c7c6 g1f3 g8f6 c2c4 b7b5
A40	St. George Defense: Polish Variation	rn1qkbnr/1bpp1ppp/p3p3/1p6/3PP3/3B1N2/PPP2PPP/RNBQK2R w KQkq -	d2d4 b7b5 e2e4 a7a6 g1f3 c8b7 f1d3 e7e6
A40	Zaire Defense	rnbqkbnr/pppppppp/8/3PP3/8/8/PPP2PPP/RNBQKBNR w KQkq -	d2d4 b8c6 d4d5 c6b8 e2e4 g8f6 e4e5 f6g8
A40	Zukertort Defense: Kingside Variation	rnbqkb1r/pppppp1p/6pn/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq -	d2d4 g7g6 g1f3 g8h6
A41	English Rat: Pounds Gambit	rn1qkbnr/ppp2ppp/3pb3/4P3/2P5/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 d7d6 c2c4 e7e5 d4e5 c8e6
A41	Kings Pawn Game: Maróczy Defense	rnbqkbnr/ppp2ppp/3p4/4p3/3PP3/8/PPP2PPP/RNBQKBNR w KQkq -	d2d4 d7d6 e2e4 e7e5
A41	Modern Defense	rnbqk1nr/ppp1ppbp/3p2p1/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq -	d2d4 g7g6 c2c4 f8g7 b1c3 d7d6
A41	Old Indian Defense	rnbqkbnr/ppp1pppp/3p4/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq -	d2d4 d7d6 c2c4
A41	Queens Pawn	rnbqkbnr/ppp1pppp/3p4/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -	d2d4 d7d6
A41	Rat Defense: English Rat, Lisbon Gambit	r1bqkbnr/ppp2ppp/2np4/4P3/2P5/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 d7d6 c2c4 e7e5 d4e5 b8c6
A41	Rat Defense: English Rat	rnbqkbnr/ppp2ppp/3p4/4p3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 d7d6 c2c4 e7e5
A41	Robatsch Defense	rn1qk1nr/ppp1ppbp/3p2p1/8/2PPP1b1/5N2/PP3PPP/RNBQKB1R w KQkq -	d2d4 d7d6 g1f3 g7g6 c2c4 f8g7 e2e4 c8g4
A41	Wade Defense	rn1qkbnr/ppp1pppp/3p4/8/3P2b1/5N2/PPP1PPPP/RNBQKB1R w KQkq -	d2d4 d7d6 g1f3 c8g4
A41	Zukertort Opening: Wade Defense, Chigorin Plan	1r1qkbnr/pppnpppp/3p4/8/2PP2b1/1Q3N2/PP2PPPP/RNB1KB1R w KQk -	d2d4 d7d6 g1f3 c8g4 c2c4 b8d7 d1b3 a8b8
A42	Modern Defense: Averbakh System	rnbqk1nr/ppp1ppbp/3p2p1/8/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq -	d2d4 g7g6 c2c4 f8g7 b1c3 d7d6 e2e4
A42	Modern Defense: Kotov Variation	r1bqk1nr/ppp1ppbp/2np2p1/8/2PPP3/2N5/PP3PPP/R1BQKBNR w KQkq -	d2d4 g7g6 c2c4 f8g7 b1c3 d7d6 e2e4 b8c6
A42	Modern Defense: Randspringer Variation	rnbqk1nr/ppp1p1bp/3p2p1/5p2/2PPP3/2N5/PP3PPP/R1BQKBNR w KQkq -	d2d4 g7g6 c2c4 f8g7 b1c3 d7d6 e2e4 f7f5
A42	Pterodactyl Defense: Central, Bogolubovia	rnb1k1nr/pp2ppbp/3p2p1/q1p5/2PPP3/2N5/PP2NPPP/R1BQKB1R w KQkq -	d2d4 g7g6 c2c4 f8g7 e2e4 d7d6 b1c3 c7c5 g1e2 d8a5
A42	Pterodactyl Defense	rnb1k1nr/pp2ppbp/3p2p1/q1p5/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQkq -	g1f3 c7c5 c2c4 g7g6 d2d4 f8g7 e2e4 d8a5 b1c3 d7d6
A43	Benoni Defense: Benoni Gambit Accepted	rnbqkbnr/pp1ppppp/8/2P5/8/8/PPP1PPPP/RNBQKBNR b KQkq -	d2d4 c7c5 d4c5
A43	Benoni Defense: Benoni Gambit, Schlenker Defense	r1bqkbnr/pp1ppppp/n7/2P5/8/8/PPP1PPPP/RNBQKBNR w KQkq -	d2d4 c7c5 d4c5 b8a6
A43	Benoni Defense: Benoni-Indian Defense, Kingside Move Order	rnbqkb1r/pp1ppppp/5n2/2pP4/8/5N2/PPP1PPPP/RNBQKB1R b KQkq -	d2d4 g8f6 g1f3 c7c5 d4d5
A43	Benoni Defense: Benoni-Indian Defense	rnbqkb1r/pp1ppppp/5n2/2pP4/8/8/PPP1PPPP/RNBQKBNR w KQkq -	d2d4 c7c5 d4d5 g8f6
A43	Benoni Defense: Benoni-Staunton Gambit	rnbqkbnr/pp1pp1pp/8/2pP1p2/4P3/8/PPP2PPP/RNBQKBNR b KQkq -	d2d4 c7c5 d4d5 f7f5 e2e4
A43	Benoni Defense: Cormorant Gambit	rnbqkbnr/p2ppppp/1p6/2P5/8/8/PPP1PPPP/RNBQKBNR w KQkq -	d2d4 c7c5 d4c5 b7b6
A43	Benoni Defense: Hawk Variation	rnbqkb1r/pp1ppppp/5n2/3P4/2p5/5N2/PPP1PPPP/RNBQKB1R w KQkq -	d2d4 g8f6 g1f3 c7c5 d4d5 c5c4
A43	Benoni Defense: Old Benoni	rnbqkbnr/pp2pppp/3p4/2pP4/8/8/PPP1PPPP/RNBQKBNR w KQkq -	d2d4 c7c5 d4d5 d7d6
A43	Benoni Defense: Old Benoni, Schmid Variation	rnbqkbnr/pp2pp1p/3p2p1/2pP4/8/2N5/PPP1PPPP/R1BQKBNR w KQkq -	d2d4 c7c5 d4d5 d7d6 b1c3 g7g6
A43	Benoni Defense: Snail Variation	r1bqkbnr/pp1ppppp/n7/2pP4/8/8/PPP1PPPP/RNBQKBNR w KQkq -	d2d4 c7c5 d4d5 b8a6
A43	Benoni Defense: Woozle	rnb1kb1r/pp1ppppp/5n2/q1pP4/8/2N5/PPP1PPPP/R1BQKBNR w KQkq -	d2d4 c7c5 d4d5 g8f6 b1c3 d8a5
A43	Benoni Defense: Zilbermints-Benoni Gambit	rnbqkbnr/pp1ppppp/8/2p5/1P1P4/8/P1P1PPPP/RNBQKBNR b KQkq -	d2d4 c7c5 b2b4
A43	Benoni Defense: Zilbermints-Benoni Gambit	rnbqkbnr/pp1ppppp/8/8/1P1p4/5N2/P1P1PPPP/RNBQKB1R b KQkq -	d2d4 c7c5 g1f3 c5d4 b2b4
A43	Benoni Defense: Zilbermints-Benoni Gambit, Tamarkin Countergambit	rnbqkbnr/pp1p1ppp/8/4p3/1P1p4/5N2/P1P1PPPP/RNBQKB1R w KQkq -	d2d4 c7c5 g1f3 c5d4 b2b4 e7e5
A43	Franco-Benoni Defense	rnbqkbnr/pp1p1ppp/4p3/2pP4/4P3/8/PPP2PPP/RNBQKBNR b KQkq -	e2e4 e7e6 d2d4 c7c5 d4d5
A43	Indian Game: Pseudo-Benko	rnbqkb1r/p2ppppp/5n2/1ppP4/8/5N2/PPP1PPPP/RNBQKB1R w KQkq -	d2d4 g8f6 g1f3 c7c5 d4d5 b7b5
A43	Old Benoni Defense: Mujannah Formation	rnbqkbnr/pp1pp1pp/8/2pP1p2/8/8/PPP1PPPP/RNBQKBNR w KQkq -	d2d4 c7c5 d4d5 f7f5
A43	Old Benoni Defense	rnbqkbnr/pp1ppppp/8/2p5/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -	d2d4 c7c5
A43	Old Benoni Defense	rnbqkbnr/pp1ppppp/8/2pP4/8/8/PPP1PPPP/RNBQKBNR b KQkq -	d2d4 c7c5 d4d5
A43	Queens Pawn Game: Liedmann Gambit	rnbqkbnr/pp1ppppp/8/8/2Pp4/4P3/PP3PPP/RNBQKBNR b KQkq -	d2d4 c7c5 c2c4 c5d4 e2e3
A44	Old Benoni Defense	rnbqkbnr/pp1p1ppp/8/2pPp3/8/8/PPP1PPPP/RNBQKBNR w KQkq e6	d2d4 c7c5 d4d5 e7e5
A44	Semi-Benoni	rnbqkbnr/pp3ppp/3p4/2pPp3/4P3/8/PPP2PPP/RNBQKBNR w KQkq -	d2d4 c7c5 d4d5 e7e5 e2e4 d7d6
A45	Amazon Attack: Siberian Attack	rnbqkb1r/ppp1pppp/5n2/3p4/3P4/2NQ4/PPP1PPPP/R1B1KBNR b KQkq -	d2d4 g8f6 b1c3 d7d5 d1d3
A45	Blackmar-Diemer Gambit Declined: O'Kelly Defense	rnbqkb1r/pp2pppp/2p2n2/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR w KQkq -	d2d4 g8f6 f2f3 d7d5 e2e4 d5e4 b1c3 c7c6
A45	Blackmar-Diemer Gambit Declined: Weinsbach Declination	rnbqkb1r/ppp2ppp/4pn2/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR w KQkq -	d2d4 g8f6 b1c3 d7d5 f2f3 e7e6 e2e4 d5e4
A45	Bronstein Gambit	rnbqkb1r/pppppppp/5n2/8/3P2P1/8/PPP1PP1P/RNBQKBNR b KQkq -	d2d4 g8f6 g2g4
A45	Canard Opening	rnbqkb1r/pppppppp/5n2/8/3P1P2/8/PPP1P1PP/RNBQKBNR b KQkq -	d2d4 g8f6 f2f4
A45	Indian Game: Gedult Attack, Gedult Attack	rnbqkb1r/ppp1pppp/5n2/3p4/3P2P1/5P2/PPP1P2P/RNBQKBNR b KQkq -	d2d4 g8f6 f2f3 d7d5 g2g4
A45	Indian Game: Gibbins-Wiedenhagen Gambit Accepted	rnbqkb1r/pppppppp/8/8/3P2n1/8/PPP1PP1P/RNBQKBNR w KQkq -	d2d4 g8f6 g2g4 f6g4
A45	Indian Game: Gibbins-Wiedenhagen Gambit, Maltese Falcon	rnbqkb1r/pppppppp/5n2/8/3PP3/5P2/PPP4P/RNBQKBNR b KQkq -	d2d4 g8f6 g2g4 f6g4 f2f3 g4f6 e2e4
A45	Indian Game: Gibbins-Wiedenhagen Gambit, Oshima Defense	rnbqkb1r/pppp1ppp/5n2/4p3/3P2P1/8/PPP1PP1P/RNBQKBNR w KQkq -	d2d4 g8f6 g2g4 e7e5
A45	Indian Game: Gibbins-Wiedenhagen Gambit, Stummer Gambit	rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/2N5/PPP1BP1P/R1BQK1NR b KQkq -	d2d4 g8f6 g2g4 f6g4 e2e4 d7d6 f1e2 g4f6 b1c3
A45	Indian Game: Lazard Gambit	rnbqkb1r/pppp1ppp/5n2/4p3/3P4/8/PPPNPPPP/R1BQKBNR w KQkq -	d2d4 g8f6 b1d2 e7e5
A45	Indian Game: Maddigan Gambit	rnbqkb1r/pppp1ppp/5n2/4p3/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq -	d2d4 g8f6 b1c3 e7e5
A45	Indian Game: Omega Gambit, Arafat Gambit	rnbqkb1r/pppppppp/5n2/6B1/3P4/3B4/PPP2PPP/RN1QK1NR b KQkq -	d2d4 g8f6 e2e4 f6e4 f1d3 e4f6 c1g5
A45	Indian Game: Omega Gambit	rnbqkb1r/pppppppp/5n2/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq -	d2d4 g8f6 e2e4
A45	Indian Game: Paleface Attack, Blackmar-Diemer Gambit Deferred	rnbqkb1r/ppp1pppp/5n2/3p4/3PP3/5P2/PPP3PP/RNBQKBNR b KQkq -	d2d4 g8f6 f2f3 d7d5 e2e4
A45	Indian Game: Pawn Push Variation	rnbqkb1r/pppppppp/5n2/3P4/8/8/PPP1PPPP/RNBQKBNR b KQkq -	d2d4 g8f6 d4d5
A45	Indian Game: Reversed Chigorin Defense	rnbqkb1r/pp1ppppp/5n2/2p5/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq -	d2d4 g8f6 b1c3 c7c5
A45	Indian Game	rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -	d2d4 g8f6
A45	Indian Game: Tartakower Attack	rnbqkb1r/pppppppp/5n2/8/3P4/6P1/PPP1PP1P/RNBQKBNR b KQkq -	d2d4 g8f6 g2g3
A45	Paleface Attack	rnbqkb1r/pppppppp/5n2/8/3P4/5P2/PPP1P1PP/RNBQKBNR b KQkq -	d2d4 g8f6 f2f3
A45	Queens Pawn Game: Chigorin Variation	rnbqkb1r/ppp1pppp/5n2/3p4/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq -	d2d4 g8f6 b1c3 d7d5
A45	Queens Pawn Opening: Veresov, Richter Attack	rnbqkb1r/ppp1pppp/5n2/3p4/3P4/2N2P2/PPP1P1PP/R1BQKBNR b KQkq -	d2d4 g8f6 f2f3 d7d5 b1c3
A45	Trompowsky Attack: Borg Variation	rnbqkb1r/pppppp1p/8/6p1/3PnB2/8/PPP1PPPP/RN1QKBNR w KQkq -	d2d4 g8f6 c1g5 f6e4 g5f4 g7g5
A45	Trompowsky Attack: Classical Defense, Big Center Variation	rnbqkb1r/pppp1ppp/4pn2/6B1/3PP3/8/PPP2PPP/RN1QKBNR b KQkq -	d2d4 g8f6 c1g5 e7e6 e2e4
A45	Trompowsky Attack: Classical Defense	rnbqkb1r/pppp1ppp/4pn2/6B1/3P4/8/PPP1PPPP/RN1QKBNR w KQkq -	d2d4 g8f6 c1g5 e7e6
A45	Trompowsky Attack: Edge Variation, Hergert Gambit	rn1qkb1r/ppp1pppp/5n2/3p1b2/3PP2B/2N2P2/PPP3PP/R2QKBNR b KQkq -	d2d4 g8f6 c1g5 f6e4 g5h4 d7d5 f2f3 e4f6 b1c3 c8f5 e2e4
A45	Trompowsky Attack: Edge Variation, Hergert Gambit	rnb1kb1r/pp2pppp/2p5/q2p4/3PP2B/2P5/PP1Q1PPP/R3KBNR b KQkq -	d2d4 g8f6 c1g5 f6e4 g5h4 c7c6 b1d2 d8a5 c2c3 e4d2 d1d2 d7d5 e2e4
A45	Trompowsky Attack: Edge Variation	rnbqkb1r/pppppppp/8/8/3Pn2B/8/PPP1PPPP/RN1QKBNR b KQkq -	d2d4 g8f6 c1g5 f6e4 g5h4
A45	Trompowsky Attack: Poisoned Pawn Variation	rnb1kb1r/pp1ppppp/1q3n2/2pP2B1/8/2N5/PPP1PPPP/R2QKBNR b KQkq -	d2d4 g8f6 c1g5 c7c5 d4d5 d8b6 b1c3
A45	Trompowsky Attack: Raptor Variation, Hergert Gambit	rnbqkb1r/pppp1ppp/8/4p1P1/3P4/8/PPP1PPP1/RN1QKBNR w KQkq -	d2d4 g8f6 c1g5 f6e4 h2h4 e4g5 h4g5 e7e5
A45	Trompowsky Attack: Raptor Variation	rnbqkb1r/pppppppp/8/6B1/3Pn2P/8/PPP1PPP1/RN1QKBNR b KQkq -	d2d4 g8f6 c1g5 f6e4 h2h4
A45	Trompowsky Attack	rnbqkb1r/pppppppp/5n2/6B1/3P4/8/PPP1PPPP/RN1QKBNR b KQkq -	d2d4 g8f6 c1g5
A46	Dory Defense	rnbqkb1r/pppppppp/8/8/3Pn3/5N2/PPP1PPPP/RNBQKB1R w KQkq -	d2d4 g8f6 g1f3 f6e4
A46	Indian Game: Czech-Indian	rnbqkb1r/pp1ppppp/2p2n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq -	d2d4 g8f6 g1f3 c7c6
A46	Indian Game: Knights Variation, Alburt-Miles Variation	rnbqkb1r/1ppppppp/p4n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq -	d2d4 g8f6 g1f3 a7a6
A46	Indian Game: Knights Variation	rnbqkb1r/pppppppp/5n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq -	d2d4 g8f6 g1f3
A46	Indian Game: London System	rnbqkb1r/pppp1ppp/4pn2/8/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq -	d2d4 g8f6 g1f3 e7e6 c1f4
A46	Indian Game: Polish Variation	rnbqkb1r/p1pppppp/5n2/1p6/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq -	d2d4 g8f6 g1f3 b7b5
A46	Indian Game: Spielmann-Indian	rnbqkb1r/pp1ppppp/5n2/2p5/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq -	d2d4 g8f6 g1f3 c7c5
A46	Indian Game: Wade-Tartakower Defense	rnbqkb1r/ppp1pppp/3p1n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq -	d2d4 g8f6 g1f3 d7d6
A46	Old Indian: Czech Variation	rnbqkb1r/pp2pppp/2pp1n2/8/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq -	d2d4 g8f6 g1f3 c7c6 c2c4 d7d6
A46	Old Indian Defense: Tartakower-Indian	rn1qkb1r/ppp1pppp/3p1n2/8/2PP2b1/5N2/PP2PPPP/RNBQKB1R w KQkq -	d2d4 g8f6 g1f3 d7d6 c2c4 c8g4
A46	Queens Pawn Game: Torre Attack, Breyer Variation	rnb1kb1r/pp3ppp/1q2pn2/2pp2B1/3P4/2P1PN2/PP3PPP/RN1QKB1R w KQkq -	d2d4 g8f6 g1f3 e7e6 c1g5 d7d5 e2e3 c7c5 c2c3 d8b6
A46	Queens Pawn Game: Veresov Attack, Classical Defense	rnbqkb1r/ppp2ppp/4pn2/3p2B1/3P4/2N2N2/PPP1PPPP/R2QKB1R b KQkq -	d2d4 g8f6 g1f3 e7e6 b1c3 d7d5 c1g5
A46	Torre Attack: Classical Defense, Nimzowitsch Variation	rnbqkb1r/pppp1pp1/4pn1p/6B1/3P4/5N2/PPP1PPPP/RN1QKB1R w KQkq -	d2d4 g8f6 g1f3 e7e6 c1g5 h7h6
A46	Torre Attack: Classical Defense, Petrosian Gambit	rnbqkb1r/p2p1ppp/1p2pn2/2pP2B1/8/4PN2/PPP2PPP/RN1QKB1R b KQkq -	d2d4 g8f6 g1f3 e7e6 c1g5 c7c5 e2e3 b7b6 d4d5
A46	Torre Attack	rnbqkb1r/pppp1ppp/4pn2/6B1/3P4/5N2/PPP1PPPP/RN1QKB1R b KQkq -	d2d4 g8f6 g1f3 e7e6 c1g5
A46	Torre Attack: Wagner Gambit	rnbqkb1r/pp1p1ppp/4pn2/2p3B1/3PP3/5N2/PPP2PPP/RN1QKB1R b KQkq -	d2d4 g8f6 g1f3 e7e6 c1g5 c7c5 e2e4
A46	Yusupov-Rubinstein System	rnbqkb1r/pppp1ppp/4pn2/8/3P4/4PN2/PPP2PPP/RNBQKB1R b KQkq -	d2d4 g8f6 g1f3 e7e6 e2e3
A47	Indian Game: Schnepper Gambit	rnbqkb1r/p1pp1ppp/1p3n2/4p3/3P4/2P2N2/PP2PPPP/RNBQKB1R w KQkq -	d2d4 g8f6 g1f3 b7b6 c2c3 e7e5
A47	Marienbad System	rn1qkb1r/pb1ppppp/1p3n2/2p5/3P4/5NP1/PPP1PPBP/RNBQK2R w KQkq -	d2d4 g8f6 g1f3 b7b6 g2g3 c8b7 f1g2 c7c5
A47	Queens Indian Defense: Marienbad System, Berg Variation	rn1qkb1r/pb1ppppp/1p3n2/8/2PQ4/5NP1/PP2PPBP/RNB1K2R b KQkq -	d2d4 g8f6 g1f3 b7b6 g2g3 c8b7 f1g2 c7c5 c2c4 c5d4 d1d4
A47	Queens Indian Defense	rnbqkb1r/p1pppppp/1p3n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq -	d2d4 g8f6 g1f3 b7b6
A48	East Indian Defense	rnbqkb1r/pppppp1p/5np1/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq -	d2d4 g8f6 g1f3 g7g6
A48	London System	rnbqkb1r/pppppp1p/5np1/8/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq -	d2d4 g8f6 g1f3 g7g6 c1f4
A48	Queens Pawn Game: Barry Attack, Grünfeld Variation	rnbq1rk1/ppp1ppbp/5np1/3p4/3P1B2/2N1PN2/PPP1BPPP/R2QK2R b KQ -	d2d4 g8f6 g1f3 g7g6 b1c3 d7d5 c1f4 f8g7 e2e3 e8g8 f1e2
A48	Queens Pawn Game: Torre Attack, Grünfeld Variation, Main Line	rnbq1rk1/ppp1ppbp/5np1/3p2B1/3P4/4PN2/PPPN1PPP/R2QKB1R w KQ -	d2d4 g8f6 g1f3 g7g6 c1g5 f8g7 b1d2 d7d5 e2e3 e8g8
A48	Torre Attack: Fianchetto Defense, Euwe Variation	rnbqk2r/pp1pppbp/5np1/2p3B1/3P4/5N2/PPPNPPPP/R2QKB1R w KQkq -	d2d4 g8f6 g1f3 g7g6 c1g5 f8g7 b1d2 c7c5
A48	Torre Attack	rnbqkb1r/pppppp1p/5np1/6B1/3P4/5N2/PPP1PPPP/RN1QKB1R b KQkq -	d2d4 g8f6 g1f3 g7g6 c1g5
A49	Indian Game: Przepiorka Variation	rnbqkb1r/pppppp1p/5np1/8/3P4/5NP1/PPP1PP1P/RNBQKB1R b KQkq -	d2d4 g8f6 g1f3 g7g6 g2g3
A49	Kings Indian Defense: Fianchetto Variation, Benjamin Defense	rnb2rk1/pp2ppbp/1qpp1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - -	d2d4 g8f6 g1f3 g7g6 g2g3 f8g7 f1g2 e8g8 e1g1 d7d6 c2c4 c7c6 b1c3 d8b6
A50	Indian Game: Medusa Gambit	rnbqkb1r/pppppp1p/5n2/6p1/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 g7g5
A50	Indian Game: Normal Variation	rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq -	d2d4 g8f6 c2c4
A50	Indian Game: Pyrenees Gambit	rnbqkb1r/p1pppppp/5n2/1p6/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 b7b5
A50	Mexican Defense: Horsefly Gambit	r1bqkb1r/pppppppp/5n2/3Pn3/2P2P2/8/PP2P1PP/RNBQKBNR b KQkq -	d2d4 g8f6 c2c4 b8c6 d4d5 c6e5 f2f4
A50	Mexican Defense	r1bqkb1r/pppppppp/2n2n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 b8c6
A50	Queens Indian Accelerated	rnbqkb1r/p1pppppp/1p3n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 b7b6
A50	Slav Indian	rnbqkb1r/pp1ppppp/2p2n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 c7c6
A51	Budapest Defense: Fajarowicz Defense, Bonsdorf Variation	rnbqkb1r/p1pp1ppp/1p6/4P3/2P1n3/P7/1P2PPPP/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 e7e5 d4e5 f6e4 a2a3 b7b6
A51	Budapest Defense: Fajarowicz-Steiner Variation	rnbqkb1r/pppp1ppp/8/4P3/2P1n3/8/PPQ1PPPP/RNB1KBNR b KQkq -	d2d4 g8f6 c2c4 e7e5 d4e5 f6e4 d1c2
A51	Budapest Defense: Fajarowicz Variation	rnbqkb1r/pppp1ppp/8/4P3/2P1n3/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 e7e5 d4e5 f6e4
A51	Indian Game: Budapest Defense	rnbqkb1r/pppp1ppp/5n2/4p3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 e7e5
A52	Budapest Defense: Adler Variation	rnbqkb1r/pppp1ppp/8/4P3/2P3n1/5N2/PP2PPPP/RNBQKB1R b KQkq -	d2d4 g8f6 c2c4 e7e5 d4e5 f6g4 g1f3
A52	Budapest Defense: Alekhine Variation, Abonyi Variation	rnbqkb1r/pppp1ppp/2n5/8/2P1PP2/8/PP4PP/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 e7e5 d4e5 f6g4 e2e4 g4e5 f2f4 e5c6
A52	Budapest Defense: Alekhine Variation	rnbqkb1r/pppp1ppp/8/4P3/2P1P1n1/8/PP3PPP/RNBQKBNR b KQkq -	d2d4 g8f6 c2c4 e7e5 d4e5 f6g4 e2e4
A52	Budapest Defense: Alekhine Variation, Tartakower Defense	rnbqkb1r/ppp2ppp/3p4/4P3/2P1P1n1/8/PP3PPP/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 e7e5 d4e5 f6g4 e2e4 d7d6
A52	Budapest Defense	rnbqkb1r/pppp1ppp/8/4P3/2P3n1/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 e7e5 d4e5 f6g4
A52	Budapest Defense: Rubinstein Variation	rnbqkb1r/pppp1ppp/8/4P3/2P2Bn1/8/PP2PPPP/RN1QKBNR b KQkq -	d2d4 g8f6 c2c4 e7e5 d4e5 f6g4 c1f4
A53	Old Indian: Aged Gibbon Gambit	rnbqkb1r/ppp1pppp/3p1n2/8/2PP2P1/8/PP2PP1P/RNBQKBNR b KQkq -	d2d4 g8f6 c2c4 d7d6 g2g4
A53	Old Indian: Czech Variation	rnbqkb1r/pp2pppp/2pp1n2/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq -	d2d4 g8f6 c2c4 d7d6 b1c3 c7c6
A53	Old Indian Defense: Janowski Variation, Fianchetto Variation	rn1qkb1r/ppp1pppp/3p1n2/5b2/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq -	d2d4 g8f6 c2c4 d7d6 b1c3 c8f5 g1f3
A53	Old Indian Defense: Janowski Variation, Fianchetto Variation	rn1qkb1r/ppp1pppp/3p1n2/5b2/2PP4/2N3P1/PP2PP1P/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 d7d6 b1c3 c8f5 g2g3
A53	Old Indian Defense: Janowski Variation, Grinberg Gambit	rn1qkb1r/ppp1pppp/3p1n2/5b2/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 d7d6 b1c3 c8f5 e2e4
A53	Old Indian Defense: Janowski Variation, Main Line	rn1qkb1r/ppp1pppp/3p1n2/5b2/2PP4/2N2P2/PP2P1PP/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 d7d6 b1c3 c8f5 f2f3
A53	Old Indian Defense: Janowski Variation	rn1qkb1r/ppp1pppp/3p1n2/5b2/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq -	d2d4 g8f6 c2c4 d7d6 b1c3 c8f5
A53	Old Indian Defense	rnbqkb1r/ppp1pppp/3p1n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 d7d6
A54	Old Indian Defense: Dus-Khotimirsky Variation	r1bqkb1r/pppn1ppp/3p1n2/4p3/2PP4/2NBP3/PP3PPP/R1BQK1NR b KQkq -	d2d4 g8f6 c2c4 d7d6 b1c3 e7e5 e2e3 b8d7 f1d3
A54	Old Indian Defense: Two Knights Variation	rnbqkb1r/ppp2ppp/3p1n2/4p3/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq -	d2d4 g8f6 c2c4 d7d6 b1c3 e7e5 g1f3
A54	Old Indian Defense: Ukrainian Variation	rnbqkb1r/ppp2ppp/3p1n2/4p3/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq -	d2d4 g8f6 c2c4 d7d6 b1c3 e7e5
A55	Old Indian Defense: Normal Variation	r1bqkb1r/pppn1ppp/3p1n2/4p3/2PPP3/2N2N2/PP3PPP/R1BQKB1R b KQkq -	d2d4 g8f6 c2c4 d7d6 b1c3 b8d7 e2e4 e7e5 g1f3
A56	Benoni Defense: Czech Benoni Defense	rnbqkb1r/pp1p1ppp/5n2/2pPp3/2P5/8/PP2PPPP/RNBQKBNR w KQkq e6	d2d4 g8f6 c2c4 c7c5 d4d5 e7e5
A56	Benoni Defense: Hromádka System	rnbqkb1r/pp2pppp/3p1n2/2pP4/2P5/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 d7d6
A56	Benoni Defense: Kings Indian System	rnbqkb1r/pp3p1p/3p1np1/2pPp3/2P1P3/2N5/PP3PPP/R1BQKBNR w KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 e7e5 b1c3 d7d6 e2e4 g7g6
A56	Benoni Defense	rnbqkb1r/pp1ppppp/5n2/2p5/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 c7c5
A56	Benoni Defense: Weenink Variation	rnbqkb1r/pp1p1ppp/4pn2/2P5/2P5/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 c7c5 d4c5 e7e6
A56	Grunfeld Defense: Three Knights Variation, Burille Variation, Reversed Tarrasch	r1bq1rk1/pp2ppbp/2n2np1/3p4/2PP4/2N2N2/PP2BPPP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 c7c5 e2e3 g7g6 b1c3 f8g7 g1f3 e8g8 f1e2 c5d4 e3d4 d7d5 e1g1 b8c6
A56	Vulture Defense	rnbqkb1r/pp1ppppp/8/2pP4/2P1n3/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 f6e4
A57	Benko Gambit Accepted: Dlugy Variation	rnbqkb1r/3ppppp/p4n2/1PpP4/8/5P2/PP2P1PP/RNBQKBNR b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 f2f3
A57	Benko Gambit Accepted: Modern Variation	rnbqkb1r/3ppppp/p4n2/1PpP4/8/4P3/PP3PPP/RNBQKBNR b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 e2e3
A57	Benko Gambit Accepted: Pawn Return Variation	rnbqkb1r/3ppppp/pP3n2/2pP4/8/8/PP2PPPP/RNBQKBNR b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5b6
A57	Benko Gambit Accepted	rnbqkb1r/3ppppp/p4n2/1PpP4/8/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6
A57	Benko Gambit Declined: Bishop Attack	rnbqkb1r/p2ppppp/5n2/1ppP2B1/2P5/8/PP2PPPP/RN1QKBNR b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c1g5
A57	Benko Gambit Declined: Hjørring Countergambit	rnbqkb1r/p2ppppp/5n2/1ppP4/2P1P3/8/PP3PPP/RNBQKBNR b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 e2e4
A57	Benko Gambit Declined: Main Line	rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/5N2/PP2PPPP/RNBQKB1R b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 g1f3
A57	Benko Gambit Declined: Pseudo-Sämisch	rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/5P2/PP2P1PP/RNBQKBNR b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 f2f3
A57	Benko Gambit Declined: Quiet Line	rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/8/PP1NPPPP/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 b1d2
A57	Benko Gambit Declined: Sosonko Variation	rnbqkb1r/p2ppppp/5n2/1ppP4/P1P5/8/1P2PPPP/RNBQKBNR b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 a2a4
A57	Benko Gambit: Mutkin Countergambit	rnbqkb1r/p2ppppp/5n2/1ppP4/2P3P1/8/PP2PP1P/RNBQKBNR b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 g2g4
A57	Benko Gambit: Nescafe Frappe Attack	rnbqkb1r/4pppp/3p1n2/1NpP4/1pB1P3/8/PP3PPP/R1BQK1NR b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b1c3 a6b5 e2e4 b5b4 c3b5 d7d6 f1c4
A57	Benko Gambit	rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5
A57	Benko Gambit: Zaitsev System	rnbqkb1r/3ppppp/p4n2/1PpP4/8/2N5/PP2PPPP/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b1c3
A57	Benko Gambit: Zaitsev Variation, Nescafe Frappe Attack	rnbqkb1r/3ppppp/5n2/1NpP4/1p2P3/8/PP3PPP/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b1c3 a6b5 e2e4 b5b4 c3b5
A58	Benko Gambit Accepted: Central Storming Variation	rn1qkb1r/3ppp1p/b4np1/2pP4/5P2/2N5/PP2P1PP/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 g7g6 b1c3 c8a6 f2f4
A58	Benko Gambit Accepted: Fianchetto Variation	rn1qk2r/4ppbp/b2p1np1/2pP4/8/2N2NP1/PP2PPBP/R1BQK2R b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 g7g6 b1c3 c8a6 g2g3 d7d6 f1g2 f8g7 g1f3
A58	Benko Gambit Accepted: Fully Accepted Variation	rnbqkb1r/3ppppp/P4n2/2pP4/8/8/PP2PPPP/RNBQKBNR b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6
A58	Benko Gambit: Fianchetto Variation	rn1qkb1r/4pp1p/b2p1np1/2pP4/8/2N2NP1/PP2PP1P/R1BQKB1R b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 c8a6 b1c3 d7d6 g1f3 g7g6 g2g3
A58	Benko Gambit: Nd2 Variation	rn1qkb1r/4pp1p/b2p1np1/2pP4/8/2N5/PP1NPPPP/R1BQKB1R b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 c8a6 b1c3 d7d6 g1f3 g7g6 f3d2
A59	Benko Gambit Accepted: King Walk Variation	rn1q1rk1/4ppbp/3p1np1/2pP4/4P3/2N2NP1/PP3PKP/R1BQ3R b - -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 g7g6 b1c3 c8a6 g1f3 d7d6 e2e4 a6f1 e1f1 f8g7 g2g3 e8g8 f1g2
A59	Benko Gambit Accepted: Yugoslav	rn1qkb1r/4pp1p/3p1np1/2pP4/4P3/2N5/PP2NPPP/R1BQ1K1R b kq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 g7g6 b1c3 c8a6 e2e4 a6f1 e1f1 d7d6 g1e2
A59	Benko Gambit Accepted: Yugoslav	rn1qkb1r/4pppp/b2p1n2/2pP4/4P3/2N5/PP3PPP/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 c8a6 b1c3 d7d6 e2e4
A59	Benko Gambit	rn1qkb1r/4pp1p/3p1np1/2pP4/4P3/2N3P1/PP3P1P/R1BQ1KNR b kq -	d2d4 g8f6 c2c4 c7c5 d4d5 b7b5 c4b5 a7a6 b5a6 g7g6 b1c3 c8a6 e2e4 a6f1 e1f1 d7d6 g2g3
A60	Benoni Defense: Modern Variation	rnbqkb1r/pp1p1ppp/4pn2/2pP4/2P5/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 e7e6
A60	Benoni Defense: Modern Variation, Snake Variation	rnbqk2r/pp1p1ppp/3b1n2/2pP4/8/2N5/PP2PPPP/R1BQKBNR w KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 f8d6
A61	Benoni Defense: Fianchetto Variation	rnbqkb1r/pp3p1p/3p1np1/2pP4/8/2N2NP1/PP2PP1P/R1BQKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 e6d5 c4d5 d7d6 b1c3 g7g6 g2g3
A61	Benoni Defense: Knights Tour Variation	rnbqkb1r/pp3p1p/3p1np1/2pP4/8/2N5/PP1NPPPP/R1BQKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 e6d5 c4d5 d7d6 b1c3 g7g6 f3d2
A61	Benoni Defense	rnbqkb1r/pp3p1p/3p1np1/2pP4/8/2N2N2/PP2PPPP/R1BQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 e6d5 c4d5 d7d6 b1c3 g7g6
A61	Benoni Defense: Uhlmann Variation	rnbqkb1r/pp3p1p/3p1np1/2pP2B1/8/2N2N2/PP2PPPP/R2QKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 e6d5 c4d5 d7d6 b1c3 g7g6 c1g5
A62	Benoni Defense: Fianchetto Variation	rnbq1rk1/pp3pbp/3p1np1/2pP4/8/2N2NP1/PP2PPBP/R1BQK2R w KQ -	d2d4 g8f6 c2c4 e7e6 g2g3 c7c5 d4d5 e6d5 c4d5 d7d6 b1c3 g7g6 f1g2 f8g7 g1f3 e8g8
A63	Benoni Defense: Fianchetto Variation, Hastings Defense	r1bq1rk1/pp1n1pbp/3p1np1/2pP4/8/2N2NP1/PP2PPBP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 e7e6 g2g3 c7c5 d4d5 e6d5 c4d5 d7d6 b1c3 g7g6 f1g2 f8g7 g1f3 e8g8 e1g1 b8d7
A64	Benoni Defense: Fianchetto Variation, Hastings Defense, Main Line	r1bqr1k1/1p1n1pbp/p2p1np1/2pP4/P7/2N3P1/1P1NPPBP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 e7e6 g2g3 c7c5 d4d5 e6d5 c4d5 d7d6 b1c3 g7g6 f1g2 f8g7 g1f3 e8g8 e1g1 a7a6 a2a4 b8d7 f3d2 f8e8
A65	Benoni Defense: Kings Pawn Line	rnbqkb1r/pp3ppp/3p1n2/2pP4/4P3/2N5/PP3PPP/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4
A66	Benoni Defense: Mikenas Variation	rnbqk2r/pp3pbp/3p1np1/2pPP3/5P2/2N5/PP4PP/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 f2f4 f8g7 e4e5
A66	Benoni Defense: Pawn Storm Variation	rnbqkb1r/pp3p1p/3p1np1/2pP4/4PP2/2N5/PP4PP/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 f2f4
A67	Benoni Defense: Taimanov Variation	rnbqk2r/pp3pbp/3p1np1/1BpP4/4PP2/2N5/PP4PP/R1BQK1NR b KQkq -	d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 f2f4 f8g7 f1b5
A68	Benoni Defense: Four Pawns Attack	rnbq1rk1/pp3pbp/3p1np1/2pP4/4PP2/2N2N2/PP4PP/R1BQKB1R w KQ -	d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 f2f4 f8g7 g1f3 e8g8
A69	Benoni Defense: Four Pawns Attack, Main Line	rnbqr1k1/pp3pbp/3p1np1/2pP4/4PP2/2N2N2/PP2B1PP/R1BQK2R w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f4 e8g8 g1f3 c7c5 d4d5 e7e6 f1e2 e6d5 c4d5 f8e8
A70	Benoni Defense: Classical Variation, New York Variation	rnbqk2r/pp3pbp/3p1np1/2pP4/4P3/2N2N1P/PP3PP1/R1BQKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 e6d5 c4d5 d7d6 b1c3 g7g6 e2e4 f8g7 h2h3
A70	Benoni Defense: Classical Variation	rnbqkb1r/pp3p1p/3p1np1/2pP4/4P3/2N2N2/PP3PPP/R1BQKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 e6d5 c4d5 d7d6 b1c3 g7g6 e2e4
A70	Benoni Defense: Classical Variation, Traditional Variation	rnbqk2r/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQK2R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 e6d5 c4d5 d7d6 b1c3 g7g6 e2e4 f8g7 f1e2
A71	Benoni Defense: Classical Variation, Averbakh-Grivas Attack	rnbqk2r/pp3pbp/3p1np1/2pP2B1/4P3/2N2N2/PP3PPP/R2QKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 e6d5 c4d5 d7d6 b1c3 g7g6 e2e4 f8g7 c1g5
A72	Benoni Defense: Classical	rnbq1rk1/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQK2R w KQ -	d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 g1f3 f8g7 f1e2 e8g8
A73	Benoni Defense: Classical Variation, Main Line	rnbq1rk1/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQ1RK1 b - -	d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 g1f3 f8g7 f1e2 e8g8 e1g1
A74	Benoni Defense: Classical Variation, Full Line	rnbq1rk1/1p3pbp/p2p1np1/2pP4/P3P3/2N2N2/1P2BPPP/R1BQ1RK1 b - -	d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 g1f3 f8g7 f1e2 e8g8 e1g1 a7a6 a2a4
A75	Benoni Defense: Classical Variation, Argentine Counterattack	rn1q1rk1/1p3pbp/p2p1np1/2pP4/P3P1b1/2N2N2/1P2BPPP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 e6d5 c4d5 d7d6 b1c3 g7g6 e2e4 f8g7 f1e2 e8g8 e1g1 a7a6 a2a4 c8g4
A76	Benoni Defense: Classical Variation, Czerniak Defense	rnbqr1k1/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 g1f3 f8g7 f1e2 e8g8 e1g1 f8e8
A77	Benoni Defense: Classical Variation, Czerniak Defense, Tal Line	rnbqr1k1/pp3pbp/3p1np1/2pP4/4P3/2N5/PP1NBPPP/R1BQ1RK1 b - -	d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 g1f3 f8g7 f1e2 e8g8 e1g1 f8e8 f3d2
A78	Benoni Defense: Classical Variation, Czerniak Defense	r1bqr1k1/pp3pbp/n2p1np1/2pP4/4P3/2N5/PP1NBPPP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 e6d5 c4d5 d7d6 b1c3 g7g6 e2e4 f8g7 f1e2 e8g8 e1g1 f8e8 f3d2 b8a6
A79	Benoni Defense: Classical Variation, Czerniak Defense	r1bqr1k1/pp3pbp/n2p1np1/2pP4/4P3/2N2P2/PP1NB1PP/R1BQ1RK1 b - -	d2d4 g8f6 c2c4 c7c5 d4d5 e7e6 b1c3 e6d5 c4d5 d7d6 e2e4 g7g6 g1f3 f8g7 f1e2 e8g8 e1g1 f8e8 f3d2 b8a6 f2f3
A80	Blackmar-Diemer Gambit: Netherlands Variation	rnbqkbnr/ppp1p1pp/8/5p2/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq -	d2d4 f7f5 b1c3 d7d5 e2e4 d5e4
A80	Dutch Defense: Alapin Variation	rnbqkbnr/ppppp1pp/8/5p2/3P4/3Q4/PPP1PPPP/RNB1KBNR b KQkq -	d2d4 f7f5 d1d3
A80	Dutch Defense: Hevendehl Gambit	rnbqkbnr/pppp2pp/8/4pp2/3P2P1/8/PPP1PP1P/RNBQKBNR w KQkq -	d2d4 f7f5 g2g4 e7e5
A80	Dutch Defense: Hopton Attack	rnbqkbnr/ppppp1pp/8/5pB1/3P4/8/PPP1PPPP/RN1QKBNR b KQkq -	d2d4 f7f5 c1g5
A80	Dutch Defense: Janzen-Korchnoi Gambit	rnbqkb1r/ppppp1pp/5n2/5p2/3P2P1/7P/PPP1PP2/RNBQKBNR b KQkq -	d2d4 f7f5 h2h3 g8f6 g2g4
A80	Dutch Defense: Kingfisher Gambit	rnbqkbnr/ppp1p1pp/8/3p1p2/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq -	d2d4 f7f5 b1c3 d7d5 e2e4
A80	Dutch Defense: Korchnoi Attack	rnbqkbnr/ppppp1pp/8/5p2/3P4/7P/PPP1PPP1/RNBQKBNR b KQkq -	d2d4 f7f5 h2h3
A80	Dutch Defense: Krejcik Gambit	rnbqkbnr/ppppp1pp/8/5p2/3P2P1/8/PPP1PP1P/RNBQKBNR b KQkq -	d2d4 f7f5 g2g4
A80	Dutch Defense: Krejcik Gambit, Tate Gambit	rnbqkbnr/ppp1p1pp/8/3p4/3PP1p1/2N5/PPP2P1P/R1BQKBNR b KQkq -	d2d4 f7f5 g2g4 f5g4 e2e4 d7d5 b1c3
A80	Dutch Defense: Manhattan Gambit, Anti-Classical Line	rnbqkbnr/pppp2pp/4p3/5p2/3P2P1/3Q4/PPP1PP1P/RNB1KBNR b KQkq -	d2d4 f7f5 d1d3 e7e6 g2g4
A80	Dutch Defense: Manhattan Gambit, Anti-Leningrad	rnbqkbnr/ppppp2p/6p1/5p2/3P2P1/3Q4/PPP1PP1P/RNB1KBNR b KQkq -	d2d4 f7f5 d1d3 g7g6 g2g4
A80	Dutch Defense: Manhattan Gambit, Anti-Modern	rnbqkbnr/ppp1p1pp/3p4/5p2/3P2P1/3Q4/PPP1PP1P/RNB1KBNR b KQkq -	d2d4 f7f5 d1d3 d7d6 g2g4
A80	Dutch Defense: Manhattan Gambit, Anti-Stonewall	rnbqkbnr/ppp1p1pp/8/3p1p2/3P2P1/3Q4/PPP1PP1P/RNB1KBNR b KQkq -	d2d4 f7f5 d1d3 d7d5 g2g4
A80	Dutch Defense: Omega-Isis Gambit	rnbqkbnr/pppp2pp/8/4pp2/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq -	d2d4 f7f5 g1f3 e7e5
A80	Dutch Defense: Raphael Variation	rnbqkbnr/ppppp1pp/8/5p2/3P4/2N5/PPP1PPPP/R1BQKBNR b KQkq -	d2d4 f7f5 b1c3
A80	Dutch Defense	rnbqkbnr/ppppp1pp/8/5p2/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -	d2d4 f7f5
A80	Dutch Defense: Spielmann Gambit	rnbqkb1r/ppppp1pp/5n2/5p2/3P2P1/2N5/PPP1PP1P/R1BQKBNR b KQkq -	d2d4 f7f5 b1c3 g8f6 g2g4
A80	Queens Pawn Game: Veresov Attack, Dutch System	rnbqkbnr/ppp1p1pp/8/3p1p2/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq -	d2d4 f7f5 b1c3 d7d5
A81	Dutch Defense: Blackburne Variation	rnbqkb1r/pppp2pp/4pn2/5p2/3P4/6PN/PPP1PPBP/RNBQK2R b KQkq -	d2d4 f7f5 g2g3 g8f6 f1g2 e7e6 g1h3
A81	Dutch Defense: Fianchetto Attack	rnbqkbnr/ppppp1pp/8/5p2/3P4/6P1/PPP1PP1P/RNBQKBNR b KQkq -	d2d4 f7f5 g2g3
A81	Dutch Defense: Leningrad, Basman System	rnbqk2r/pp1pp1bp/2p3pn/5p2/3P4/5NP1/PPP1PPBP/RNBQ1RK1 w kq -	d2d4 f7f5 g2g3 c7c6 f1g2 g7g6 g1f3 f8g7 e1g1 g8h6
A81	Dutch Defense: Leningrad Variation, Karlsbad Variation	rnbqk1nr/ppppp1bp/6p1/5p2/3P4/6PN/PPP1PPBP/RNBQK2R b KQkq -	d2d4 f7f5 g2g3 g7g6 f1g2 f8g7 g1h3
A81	Dutch Defense: Semi-Leningrad Variation	rnbqkb1r/ppppp2p/5np1/5p2/3P4/6P1/PPP1PPBP/RNBQK1NR w KQkq -	d2d4 f7f5 g2g3 g8f6 f1g2 g7g6
A82	Dutch Defense: Blackmars Second Gambit	rnbqkb1r/ppppp1pp/5n2/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR b KQkq -	d2d4 f7f5 e2e4 f5e4 b1c3 g8f6 f2f3
A82	Dutch Defense: Staunton Gambit Accepted	rnbqkbnr/ppppp1pp/8/8/3Pp3/8/PPP2PPP/RNBQKBNR w KQkq -	d2d4 f7f5 e2e4 f5e4
A82	Dutch Defense: Staunton Gambit, American Attack	rnbqkbnr/ppppp1pp/8/8/3Pp3/8/PPPN1PPP/R1BQKBNR b KQkq -	d2d4 f7f5 e2e4 f5e4 b1d2
A82	Dutch Defense: Staunton Gambit	rnbqkbnr/ppppp1pp/8/5p2/3PP3/8/PPP2PPP/RNBQKBNR b KQkq -	d2d4 f7f5 e2e4
A82	Dutch Defense: Staunton Gambit, Tartakower Variation	rnbqkb1r/ppppp1pp/5n2/8/3Pp1P1/2N5/PPP2P1P/R1BQKBNR b KQkq -	d2d4 f7f5 e2e4 f5e4 b1c3 g8f6 g2g4
A82	French Defense: Franco-Hiva Gambit	rnbqkbnr/pppp2pp/4p3/5p2/3PP3/8/PPP2PPP/RNBQKBNR w KQkq -	d2d4 f7f5 e2e4 e7e6
A82	Rat Defense: Balogh Defense	rnbqkbnr/ppp1p1pp/3p4/5p2/3PP3/8/PPP2PPP/RNBQKBNR w KQkq -	e2e4 d7d6 d2d4 f7f5
A83	Dutch Defense: Staunton Gambit, Alekhine Variation	rnbqkb1r/ppppp2p/5np1/6B1/3Pp2P/2N5/PPP2PP1/R2QKBNR b KQkq -	d2d4 f7f5 e2e4 f5e4 b1c3 g8f6 c1g5 g7g6 h2h4
A83	Dutch Defense: Staunton Gambit, Chigorin Variation	rnbqkb1r/pp1pp1pp/2p2n2/6B1/3Pp3/2N5/PPP2PPP/R2QKBNR w KQkq -	d2d4 f7f5 e2e4 f5e4 b1c3 g8f6 c1g5 c7c6
A83	Dutch Defense: Staunton Gambit, Lasker Variation	rnbqkb1r/ppppp2p/5np1/6B1/3Pp3/2N2P2/PPP3PP/R2QKBNR b KQkq -	d2d4 f7f5 e2e4 f5e4 b1c3 g8f6 c1g5 g7g6 f2f3
A83	Dutch Defense: Staunton Gambit, Nimzowitsch Variation	rnbqkb1r/p1ppp1pp/1p3n2/6B1/3Pp3/2N5/PPP2PPP/R2QKBNR w KQkq -	d2d4 f7f5 e2e4 f5e4 b1c3 g8f6 c1g5 b7b6
A83	Dutch Defense: Staunton Gambit	rnbqkb1r/ppppp1pp/5n2/6B1/3Pp3/2N5/PPP2PPP/R2QKBNR b KQkq -	d2d4 f7f5 e2e4 f5e4 b1c3 g8f6 c1g5
A84	Dutch Defense: Bladel Variation	rnbqkb1r/ppppp2p/6pn/5p2/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq -	d2d4 f7f5 c2c4 g7g6 b1c3 g8h6
A84	Dutch Defense: Classical Variation	rnbqkbnr/pppp2pp/4p3/5p2/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 e7e6 c2c4 f7f5
A84	Dutch Defense: Normal Variation	rnbqkb1r/ppppp1pp/5n2/5p2/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 f7f5 c2c4 g8f6
A84	Dutch Defense	rnbqkbnr/ppppp1pp/8/5p2/2PP4/8/PP2PPPP/RNBQKBNR b KQkq -	d2d4 f7f5 c2c4
A84	Dutch Defense: Rubinstein Variation	rnbqkbnr/pppp2pp/4p3/5p2/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq -	d2d4 e7e6 c2c4 f7f5 b1c3
A84	Horwitz Defense: Dutch Defense, Bellon Gambit	rnbqkbnr/pppp2pp/4p3/5p2/2PPP3/8/PP3PPP/RNBQKBNR b KQkq -	d2d4 e7e6 c2c4 f7f5 e2e4
A85	Dutch Defense: Queens Knight Variation	rnbqkb1r/ppppp1pp/5n2/5p2/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq -	d2d4 f7f5 c2c4 g8f6 b1c3
A86	Dutch Defense: Fianchetto Variation	rnbqkb1r/ppppp1pp/5n2/5p2/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq -	d2d4 f7f5 c2c4 g8f6 g2g3
A86	Dutch Defense: Hort-Antoshin System	rnb1kb1r/ppq1p1pp/2pp1n2/5p2/2PP4/2N3P1/PP2PPBP/R1BQK1NR w KQkq -	c2c4 f7f5 g2g3 g8f6 f1g2 d7d6 b1c3 c7c6 d2d4 d8c7
A86	Dutch Defense: Leningrad Variation	rnbqkb1r/ppppp2p/5np1/5p2/2PP4/6P1/PP2PP1P/RNBQKBNR w KQkq -	d2d4 f7f5 c2c4 g8f6 g2g3 g7g6
A87	Dutch Defense: Leningrad Variation	rnbqk2r/ppppp1bp/5np1/5p2/2PP4/5NP1/PP2PPBP/RNBQK2R b KQkq -	d2d4 f7f5 c2c4 g8f6 g2g3 g7g6 f1g2 f8g7 g1f3
A88	Dutch Defense: Leningrad Variation, Warsaw Variation	rnbq1rk1/pp2p1bp/2pp1np1/5p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - -	d2d4 f7f5 g2g3 g8f6 f1g2 g7g6 g1f3 f8g7 e1g1 e8g8 c2c4 d7d6 b1c3 c7c6
A89	Dutch Defense: Leningrad Variation, Matulovic Variation	r1bq1rk1/ppp1p1bp/2np1np1/5p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - -	d2d4 f7f5 g2g3 g8f6 f1g2 g7g6 g1f3 f8g7 e1g1 e8g8 c2c4 d7d6 b1c3 b8c6
A90	Dutch Defense: Classical Variation	rnbqkb1r/pppp2pp/4pn2/5p2/2PP4/6P1/PP2PPBP/RNBQK1NR b KQkq -	d2d4 e7e6 c2c4 f7f5 g2g3 g8f6 f1g2
A90	Dutch Defense: Nimzo-Dutch Variation, Alekhine Variation	rnbqk2r/ppppb1pp/4pn2/5p2/2PP4/6P1/PP1BPPBP/RN1QK1NR w KQkq -	d2d4 e7e6 c2c4 f7f5 g2g3 g8f6 f1g2 f8b4 c1d2 b4e7
A90	Dutch Defense: Nimzo-Dutch Variation	rnbqk2r/pppp2pp/4pn2/5p2/1bPP4/6P1/PP2PPBP/RNBQK1NR w KQkq -	d2d4 e7e6 c2c4 f7f5 g2g3 g8f6 f1g2 f8b4
A91	Dutch Defense: Classical Variation, Blackburne Attack	rnbqk2r/ppppb1pp/4pn2/5p2/2PP4/6PN/PP2PPBP/RNBQK2R b KQkq -	d2d4 e7e6 c2c4 f7f5 g2g3 g8f6 f1g2 f8e7 g1h3
A91	Dutch Defense: Classical Variation	rnbqk2r/ppppb1pp/4pn2/5p2/2PP4/6P1/PP2PPBP/RNBQK1NR w KQkq -	d2d4 e7e6 c2c4 f7f5 g2g3 g8f6 f1g2 f8e7
A92	Dutch Defense: Alekhine Variation	rnbq1rk1/ppppb1pp/4p3/5p2/2PPn3/5NP1/PP2PPBP/RNBQ1RK1 w - -	d2d4 e7e6 c2c4 f7f5 g2g3 g8f6 f1g2 f8e7 g1f3 e8g8 e1g1 f6e4
A92	Dutch Defense: Classical Variation	rnbq1rk1/ppppb1pp/4pn2/5p2/2PP4/5NP1/PP2PPBP/RNBQK2R w KQ -	d2d4 e7e6 c2c4 f7f5 g2g3 g8f6 f1g2 f8e7 g1f3 e8g8
A92	Dutch Defense: Stonewall Variation	rnbq1rk1/ppp1b1pp/4pn2/3p1p2/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w - -	d2d4 e7e6 c2c4 f7f5 g2g3 g8f6 f1g2 f8e7 g1f3 d7d5 e1g1 e8g8
A92	Dutch Defense: Stonewall	rnbq1rk1/ppp1b1pp/4pn2/3p1p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 b - -	d2d4 e7e6 g1f3 f7f5 g2g3 g8f6 f1g2 f8e7 e1g1 e8g8 c2c4 d7d5 b1c3
A93	Dutch Defense: Classical Variation, Stonewall Variation, Botvinnik Variation	rnbq1rk1/ppp1b1pp/4pn2/3p1p2/2PP4/1P3NP1/P3PPBP/RNBQ1RK1 b - -	d2d4 e7e6 c2c4 f7f5 g2g3 g8f6 f1g2 f8e7 g1f3 d7d5 e1g1 e8g8 b2b3
A94	Dutch Defense: Classical Variation, Stonewall Variation	rnbq1rk1/pp2b1pp/2p1pn2/3p1p2/2PP4/BP3NP1/P3PPBP/RN1Q1RK1 b - -	d2d4 e7e6 c2c4 f7f5 g2g3 g8f6 f1g2 f8e7 g1f3 d7d5 e1g1 e8g8 b2b3 c7c6 c1a3
A95	Dutch Defense: Classical Variation, Stonewall Variation	rnbq1rk1/pp2b1pp/2p1pn2/3p1p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - -	d2d4 e7e6 c2c4 f7f5 g2g3 g8f6 f1g2 d7d5 g1f3 f8e7 e1g1 e8g8 b1c3 c7c6
A95	Dutch Defense: Stonewall: Chekhover Variation	rnb1qrk1/pp2b1pp/2p1pn2/3p1pB1/2PP4/2N2NP1/PPQ1PPBP/R4RK1 b - -	d2d4 f7f5 c2c4 g8f6 g2g3 e7e6 f1g2 f8e7 g1f3 e8g8 e1g1 d7d5 b1c3 c7c6 d1c2 d8e8 c1g5
A96	Dutch Defense: Classical Variation, Buenos Aires Variation	rnbq1rk1/1pp1b1pp/3ppn2/p4p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - -	d2d4 e7e6 c2c4 f7f5 g2g3 g8f6 f1g2 f8e7 g1f3 e8g8 e1g1 d7d6 b1c3 a7a5
A96	Dutch Defense: Classical Variation, Huisl Variation	rnbq1rk1/ppp1b1pp/3pp3/5p2/2PPn3/2N2NP1/PP2PPBP/R1BQ1RK1 w - -	d2d4 e7e6 c2c4 f7f5 g2g3 g8f6 f1g2 f8e7 g1f3 e8g8 e1g1 d7d6 b1c3 f6e4
A96	Dutch Defense: Classical Variation	rnbq1rk1/ppp1b1pp/3ppn2/5p2/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w - -	d2d4 e7e6 c2c4 f7f5 g2g3 g8f6 f1g2 f8e7 g1f3 e8g8 e1g1 d7d6
A97	Dutch Defense: Classical Variation, Ilyin-Zhenevsky Variation	rnb1qrk1/ppp1b1pp/3ppn2/5p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - -	d2d4 f7f5 g1f3 g8f6 g2g3 e7e6 f1g2 f8e7 e1g1 e8g8 c2c4 d7d6 b1c3 d8e8
A97	Dutch Defense: Ilyin-Zhenevsky, Winter Variation	rnb1qrk1/ppp1b1pp/3ppn2/5p2/2PP4/2N2NP1/PP2PPBP/R1BQR1K1 b - -	d2d4 f7f5 g1f3 g8f6 g2g3 e7e6 f1g2 f8e7 e1g1 e8g8 c2c4 d7d6 b1c3 d8e8 f1e1
A98	Dutch Defense: Classical Variation, Ilyin-Zhenevsky Variation, Alatortsev-Lisitsyn Line	rnb1qrk1/ppp1b1pp/3ppn2/5p2/2PP4/2N2NP1/PPQ1PPBP/R1B2RK1 b - -	d2d4 f7f5 g1f3 g8f6 g2g3 e7e6 f1g2 f8e7 e1g1 e8g8 c2c4 d7d6 b1c3 d8e8 d1c2
A99	Dutch Defense: Classical Variation, Ilyin-Zhenevsky Variation, Modern Main Line	rnb1qrk1/ppp1b1pp/3ppn2/5p2/2PP4/1PN2NP1/P3PPBP/R1BQ1RK1 b - -	d2d4 e7e6 c2c4 f7f5 g2g3 g8f6 f1g2 f8e7 g1f3 e8g8 e1g1 d7d6 b1c3 d8e8 b2b3`);
