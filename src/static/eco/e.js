/* eslint no-tabs: 0 */
import tsv from 'tsv';

export default tsv.parse(`
E00	Catalan Opening: Hungarian Gambit	rnbqkb1r/pppp1ppp/5n2/4p3/2PP4/6P1/PP2PP1P/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 e7e6 g2g3 e6e5
E00	Catalan Opening	rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/6P1/PP2PP1P/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 e7e6 g2g3 d7d5
E00	Catalan Opening	rnbqkb1r/pppp1ppp/4pn2/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq -	d2d4 g8f6 c2c4 e7e6 g2g3
E00	Indian Game: Devin Gambit	rnbqkb1r/pppp1ppp/4pn2/8/2PP2P1/8/PP2PP1P/RNBQKBNR b KQkq -	d2d4 g8f6 c2c4 e7e6 g2g4
E00	Indian Game	rnbqkb1r/pppp1ppp/4pn2/8/2PP4/1Q6/PP2PPPP/RNB1KBNR b KQkq -	d2d4 g8f6 c2c4 e7e6 d1b3
E00	Indian Game: Seirawan Attack	rnbqkb1r/pppp1ppp/4pn2/6B1/2PP4/8/PP2PPPP/RN1QKBNR b KQkq -	d2d4 g8f6 c2c4 e7e6 c1g5
E01	Catalan Opening: Closed Variation	rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/6P1/PP2PPBP/RNBQK1NR b KQkq -	d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2
E01	Catalan Opening: Open Defense, Tarrasch Defense	r1bqkb1r/pp3ppp/2n1pn2/2pp4/2PP4/5NP1/PP2PPBP/RNBQK2R w KQkq -	d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 c7c5 g1f3 b8c6
E02	Catalan Opening: Open Defense	rnbqkb1r/ppp2ppp/4pn2/8/Q1pP4/6P1/PP2PPBP/RNB1K1NR b KQkq -	d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 d1a4
E03	Catalan Opening: Open Defense, Alekhine Variation	r1bqkb1r/1ppn1ppp/p3pn2/8/3P4/6P1/PPQ1PPBP/RNB1K1NR b KQkq -	d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 d1a4 b8d7 a4c4 a7a6 c4c2
E03	Catalan Opening: Open Defense	r1bqkb1r/pppn1ppp/4pn2/8/2QP4/6P1/PP2PPBP/RNB1K1NR b KQkq -	d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 d1a4 b8d7 a4c4
E04	Catalan Opening: Open Defense, Modern Sharp Variation	r1bqk2r/ppp2ppp/2n1pn2/8/QbpP4/5NP1/PP2PPBP/RNB1K2R w KQkq -	d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3 b8c6 d1a4 f8b4
E04	Catalan Opening: Open Defense	rnbqkb1r/ppp2ppp/4pn2/8/2pP4/5NP1/PP2PPBP/RNBQK2R b KQkq -	d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3
E05	Catalan Opening: Open Defense, Classical Line	rnbqk2r/ppp1bppp/4pn2/8/2pP4/5NP1/PP2PPBP/RNBQK2R w KQkq -	d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 d5c4 g1f3 f8e7
E06	Catalan Opening: Closed Variation	rnbqk2r/ppp1bppp/4pn2/3p4/2PP4/5NP1/PP2PPBP/RNBQK2R b KQkq -	d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 f8e7 g1f3
E07	Catalan Opening: Closed Variation, Botvinnik Variation	r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NQ1NP1/PP2PPBP/R1B2RK1 b - -	c2c4 e7e6 g2g3 d7d5 f1g2 g8f6 g1f3 f8e7 d2d4 e8g8 b1c3 c7c6 e1g1 b8d7 d1d3
E07	Catalan Opening: Closed Variation	r1bq1rk1/pppnbppp/4pn2/3p4/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w - -	d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8 e1g1 b8d7
E08	Catalan Opening: Closed	r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/1P3NP1/P1Q1PPBP/RNB2RK1 b - -	d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8 e1g1 b8d7 d1c2 c7c6 b2b3
E08	Catalan Opening: Closed, Spassky Gambit	r2q1rk1/pb1nbppp/2p1pn2/1p1p4/2PP4/1PN2NP1/P1Q1PPBP/R1BR2K1 w - -	d2d4 g8f6 c2c4 e7e6 g2g3 f8e7 f1g2 d7d5 g1f3 e8g8 e1g1 b8d7 d1c2 c7c6 b2b3 b7b6 f1d1 c8b7 b1c3 b6b5
E08	Catalan Opening: Closed Variation	r1bq1rk1/pppnbppp/4pn2/3p4/2PP4/5NP1/PPQ1PPBP/RNB2RK1 b - -	g1f3 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 f8e7 e1g1 e8g8 d2d4 b8d7 d1c2
E08	Catalan Opening: Closed, Zagoryansky Variation	r1bq1rk1/p2nbppp/1pp1pn2/3p4/P1PP4/5NP1/1PQ1PPBP/RNBR2K1 b - -	d2d4 e7e6 c2c4 g8f6 g1f3 d7d5 g2g3 f8e7 f1g2 e8g8 e1g1 b8d7 d1c2 c7c6 f1d1 b7b6 a2a4
E09	Catalan Opening: Closed, Main Line	r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/5NP1/PPQNPPBP/R1B2RK1 b - -	d2d4 g8f6 c2c4 e7e6 g1f3 d7d5 g2g3 f8e7 f1g2 e8g8 e1g1 b8d7 d1c2 c7c6 b1d2
E09	Catalan Opening: Closed, Sokolsky Variation	r2q1rk1/3nbppp/bpp1pn2/p2p4/2PP4/1P3NP1/PBQNPPBP/R4RK1 w - -	d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8 e1g1 b8d7 d1c2 c7c6 b1d2 b7b6 b2b3 a7a5 c1b2 c8a6
E09	Catalan Opening: Closed Variation, Rabinovich Variation	r1bq1rk1/p2nbppp/2p1pn2/1p1p4/2PP4/5NP1/PPQNPPBP/R1B2RK1 w - -	d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 d1c2 e7e6 b1d2 f8e7 g2g3 b8d7 f1g2 e8g8 e1g1 b7b5
E09	Catalan Opening: Closed Variation, Traditional Variation	r1bq1rk1/p2nbppp/1pp1pn2/3p4/2PP4/5NP1/PPQNPPBP/R1B2RK1 w - -	d2d4 g8f6 c2c4 e7e6 g1f3 d7d5 g2g3 f8e7 f1g2 e8g8 e1g1 b8d7 d1c2 c7c6 b1d2 b7b6
E10	Blumenfeld Countergambit Accepted	rnbqkb1r/p5pp/4pn2/1Ppp4/8/5N2/PP2PPPP/RNBQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 b7b5 d5e6 f7e6 c4b5 d7d5
E10	Blumenfeld Countergambit: Dus-Khotimirsky Variation	rnbqkb1r/p2p1ppp/4pn2/1ppP2B1/2P5/5N2/PP2PPPP/RN1QKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 b7b5 c1g5
E10	Blumenfeld Countergambit	rnbqkb1r/p2p1ppp/4pn2/1ppP4/2P5/5N2/PP2PPPP/RNBQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 d4d5 b7b5
E10	Blumenfeld Countergambit	rnbqkb1r/pp1p1ppp/4pn2/2p5/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 c7c5
E10	Blumenfeld Countergambit: Spielmann Variation	rnbqkb1r/p2p1pp1/5n1p/1ppP2B1/8/5N2/PP2PPPP/RN1QKB1R w KQkq -	d2d4 g8f6 g1f3 e7e6 c2c4 c7c5 d4d5 b7b5 c1g5 e6d5 c4d5 h7h6
E10	Indian Game: Anti-Nimzo-Indian	rnbqkb1r/pppp1ppp/4pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3
E10	Indian Game: Döry Indian	rnbqkb1r/pppp1ppp/4p3/8/2PPn3/5N2/PP2PPPP/RNBQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 f6e4
E10	Indian Game: Dzindzi-Indian Defense	rnbqkb1r/1ppp1ppp/p3pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 a7a6
E10	Tarrasch Defense: Symmetrical Variation	r1bqkb1r/pp3ppp/2n1pn2/2pp4/2PP4/2N1PN2/PP3PPP/R1BQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 c7c5 e2e3 d7d5 b1c3 b8c6
E11	Bogo-Indian Defense: Exchange Variation	rnbqk2r/pppp1ppp/4pn2/8/2PP4/5N2/PP1bPPPP/RN1QKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 b4d2
E11	Bogo-Indian Defense: Grünfeld Variation	rnbqk2r/pppp1ppp/4pn2/8/1bPP4/5N2/PP1NPPPP/R1BQKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 b1d2
E11	Bogo-Indian Defense: Haiti Variation	r1bqk2r/pppp1ppp/2n1pn2/8/1bPP4/5N2/PP1BPPPP/RN1QKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 b8c6
E11	Bogo-Indian Defense: Monticelli Trap	rn1q1rk1/pbpp1ppp/1p2p3/6N1/2PP4/2n3P1/PPQ1PPBP/R3K2R b KQ -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8b4 c1d2 b4d2 d1d2 e8g8 b1c3 f6e4 d2c2 e4c3 f3g5
E11	Bogo-Indian Defense: New England Variation	rnbqk2r/pppp1ppp/4pn2/8/1bPP4/8/PP1NPPPP/RNBQKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 f3d2
E11	Bogo-Indian Defense: Nimzowitsch Variation	rnb1k2r/ppppqppp/4pn2/8/1bPP4/5N2/PP1BPPPP/RN1QKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 d8e7
E11	Bogo-Indian Defense: Retreat Variation	rnbqk2r/ppppbppp/4pn2/8/2PP4/5N2/PP1BPPPP/RN1QKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 b4e7
E11	Bogo-Indian Defense	rnbqk2r/pppp1ppp/4pn2/8/1bPP4/5N2/PP2PPPP/RNBQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 f8b4
E11	Bogo-Indian Defense: Vitolins Variation	rnbqk2r/pp1p1ppp/4pn2/2p5/1bPP4/5N2/PP1BPPPP/RN1QKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 c7c5
E11	Bogo-Indian Defense: Wade-Smyslov Variation	rnbqk2r/1ppp1ppp/4pn2/p7/1bPP4/5N2/PP1BPPPP/RN1QKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 a7a5
E12	Nimzo-Indian Defense: Three Knights Variation, Duchamp Variation, Modern Line	rn1qk2r/pbpp1ppp/1p2pn2/6B1/1bPP4/2N5/PP1NPPPP/R2QKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 b1c3 f8b4 c1g5 c8b7 f3d2
E12	Nimzo-Indian Defense: Three Knights Variation, Duchamp Variation	rnbqk2r/p1pp1ppp/1p2pn2/8/1bPP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 b1c3 f8b4
E12	Queen's Indian Defense: Kasparov-Petrosian Variation, Andersson Variation	rn1qkb1r/pbpp1ppp/1p2p3/8/2PPn3/P1N2N2/1P2PPPP/R1BQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 a2a3 c8b7 b1c3 f6e4
E12	Queen's Indian Defense: Kasparov-Petrosian Variation, Classical Variation	rn1qkb1r/pbp2ppp/1p3n2/3p4/3P4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 a2a3 c8b7 b1c3 d7d5 c4d5 e6d5
E12	Queen's Indian Defense: Kasparov-Petrosian Variation, Hedgehog Variation	rn1qkb1r/pbpp1p1p/1p2pnp1/8/2PP4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 a2a3 c8b7 b1c3 g7g6
E12	Queen's Indian Defense: Kasparov-Petrosian Variation, Kasparov Attack	rn1qkb1r/pbp2ppp/1p2p3/3n4/3P4/P1N2N2/1PQ1PPPP/R1B1KB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 a2a3 c8b7 b1c3 d7d5 c4d5 f6d5 d1c2
E12	Queen's Indian Defense: Kasparov-Petrosian Variation, Main Line	rn1qkb1r/pbp2ppp/1p2pn2/3p4/2PP4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 a2a3 c8b7 b1c3 d7d5
E12	Queen's Indian Defense: Kasparov-Petrosian Variation, Marco Defense	rn1qk2r/pbppbppp/1p2pn2/8/2PP4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 a2a3 c8b7 b1c3 f8e7
E12	Queen's Indian Defense: Kasparov-Petrosian Variation, Modern Variation	rn1qkb1r/pbp2ppp/1p2p3/3n4/3P4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 a2a3 c8b7 b1c3 d7d5 c4d5 f6d5
E12	Queen's Indian Defense: Kasparov-Petrosian Variation, Petrosian Attack	rn1qkb1r/pbp2ppp/1p2p3/3n4/3P4/P1N1PN2/1P3PPP/R1BQKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 a2a3 c8b7 b1c3 d7d5 c4d5 f6d5 e2e3
E12	Queen's Indian Defense: Kasparov-Petrosian Variation, Polovodin Gambit	rn1qkb1r/pbp2ppp/1p2p3/3n4/3PP3/P1N2N2/1P3PPP/R1BQKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 b1c3 c8b7 a2a3 d7d5 c4d5 f6d5 e2e4
E12	Queen's Indian Defense: Kasparov-Petrosian Variation, Rashkovsky Attack	rn1qkb1r/pbp2ppp/1p2p3/3n4/Q2P4/P1N2N2/1P2PPPP/R1B1KB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 a2a3 c8b7 b1c3 d7d5 c4d5 f6d5 d1a4
E12	Queen's Indian Defense: Kasparov-Petrosian Variation	rn1qkb1r/pbpp1ppp/1p2pn2/8/2PP4/P1N2N2/1P2PPPP/R1BQKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 a2a3 c8b7 b1c3
E12	Queen's Indian Defense: Kasparov-Petrosian Variation, Romanishin Attack	rn1qkb1r/pbp2ppp/1p2p3/3n4/3P4/P1N2N2/1P1BPPPP/R2QKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 a2a3 c8b7 b1c3 d7d5 c4d5 f6d5 c1d2
E12	Queen's Indian Defense: Kasparov Variation, Botvinnik Attack	rn1qkb1r/pbpp1p2/1p2p2p/6pn/2PP4/2N2NB1/PP2PPPP/R2QKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 b1c3 c8b7 c1g5 h7h6 g5h4 g7g5 h4g3 f6h5
E12	Queen's Indian Defense: Kasparov Variation	rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 b1c3
E12	Queen's Indian Defense: Miles Variation	rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP1B2/5N2/PP2PPPP/RN1QKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 c1f4
E12	Queen's Indian Defense: Petrosian Variation, Farago Defense	rn1qkb1r/pbpp1ppp/1p2pn2/8/2PP4/P4N2/1PQ1PPPP/RNB1KB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 a2a3 c8a6 d1c2 a6b7
E12	Queen's Indian Defense: Petrosian Variation	rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/P4N2/1P2PPPP/RNBQKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 a2a3
E12	Queen's Indian Defense	rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6
E13	Queen's Indian Defense: Kasparov Variation	rn1qk2r/pbpp1pp1/1p2pn1p/8/1bPP3B/2N2N2/PP2PPPP/R2QKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 b1c3 f8b4 c1g5 h7h6 g5h4 c8b7
E14	Queen's Indian, Averbakh Variation	rn1q1rk1/pb1pbppp/1p2pn2/8/2PN4/1P1BP3/PB3PPP/RN1Q1RK1 b - -	g1f3 c7c5 b2b3 g8f6 c1b2 e7e6 e2e3 f8e7 d2d4 e8g8 f1d3 b7b6 e1g1 c8b7 c2c4 c5d4 f3d4
E14	Queen's Indian Defense: Spassky System	rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/4PN2/PP3PPP/RNBQKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 e2e3
E15	Queen's Indian, Buerger Variation	rn1qkb1r/pb1p1ppp/1p3n2/2pp2N1/2P5/6P1/PP2PPBP/RNBQK2R b KQkq -	g1f3 g8f6 c2c4 b7b6 d2d4 e7e6 g2g3 c8b7 f1g2 c7c5 d4d5 e6d5 f3g5
E15	Queen's Indian Defense: Fianchetto Traditional	rn1qkb1r/pbpp1ppp/1p2pn2/8/2PP4/5NP1/PP2PP1P/RNBQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7
E15	Queen's Indian Defense: Fianchetto Variation, Check Variation, Intermezzo Line	rn1qk2r/p1ppbppp/bp2pn2/8/2PP4/1P3NP1/P2BPP1P/RN1QKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8a6 b2b3 f8b4 c1d2 b4e7
E15	Queen's Indian Defense: Fianchetto Variation, Check Variation, Modern Line	rn2k2r/p1ppqppp/bp2pn2/8/1bPP4/1P3NP1/P2BPP1P/RN1QKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8a6 b2b3 f8b4 c1d2 d8e7
E15	Queen's Indian Defense: Fianchetto Variation, Check Variation	rn1qk2r/p1pp1ppp/bp2pn2/8/1bPP4/1P3NP1/P3PP1P/RNBQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8a6 b2b3 f8b4
E15	Queen's Indian Defense: Fianchetto Variation, Nimzowitsch Variation, Nimzowitsch Attack	rn1qkb1r/p1pp1ppp/bp2pn2/8/Q1PP4/5NP1/PP2PP1P/RNB1KB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8a6 d1a4
E15	Queen's Indian Defense: Fianchetto Variation, Nimzowitsch Variation, Quiet Line	rn1qkb1r/p1pp1ppp/bp2pn2/8/2PP4/1P3NP1/P3PP1P/RNBQKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8a6 b2b3
E15	Queen's Indian Defense: Fianchetto Variation, Nimzowitsch Variation	rn1qkb1r/p1pp1ppp/bp2pn2/8/2PP4/5NP1/PP2PP1P/RNBQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8a6
E15	Queen's Indian Defense: Fianchetto Variation, Nimzowitsch Variation, Timman's Line	rn1qkb1r/p1pp1ppp/bp2pn2/8/2PP4/1Q3NP1/PP2PP1P/RNB1KB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8a6 d1b3
E15	Queen's Indian Defense: Fianchetto Variation	rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/5NP1/PP2PP1P/RNBQKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3
E15	Queen's Indian Defense: Fianchetto Variation, Rubinstein Variation	rn1qkb1r/pb1p1ppp/1p3n2/2pp4/2P4N/6P1/PP2PPBP/RNBQK2R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 c7c5 d4d5 e6d5 f3h4
E15	Queen's Indian Defense: Fianchetto Variation, Sämisch Variation	rn1qkb1r/pb1p1ppp/1p2pn2/2p5/2PP4/5NP1/PP2PPBP/RNBQK2R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 c7c5
E16	Queen's Indian Defense: Capablanca Variation	rn1qk2r/pbpp1ppp/1p2pn2/8/1bPP4/5NP1/PP2PPBP/RNBQK2R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8b4
E16	Queen's Indian Defense: Riumin Variation	rn1qk2r/pbppbppp/1p2pn2/8/2PP4/5NP1/PP1BPPBP/RN1QK2R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8b4 c1d2 b4e7
E16	Queen's Indian Defense: Yates Variation	rn1qk2r/1bpp1ppp/1p2pn2/p7/1bPP4/5NP1/PP1BPPBP/RN1QK2R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 c1d2 a7a5 g2g3 b7b6 f1g2 c8b7
E17	Queen's Indian Defense: Anti-Queen's Indian System	rn1qk2r/pbppbppp/1p2pn2/8/2PP4/2N2NP1/PP2PPBP/R1BQK2R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 b1c3
E17	Queen's Indian Defense: Classical Variation, Polugaevsky Gambit	rn1q1rk1/pbppbppp/1p3n2/3p4/2P4N/6P1/PP2PPBP/RNBQ1RK1 b - -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 e1g1 e8g8 d4d5 e6d5 f3h4
E17	Queen's Indian Defense: Classical Variation	rn1qk2r/pbppbppp/1p2pn2/8/2PP4/5NP1/PP2PPBP/RNBQ1RK1 b kq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 e1g1
E17	Queen's Indian Defense: Classical Variation, Taimanov Gambit	rn1q1rk1/pbppbppp/1p3n2/3p4/2PN4/6P1/PP2PPBP/RNBQ1RK1 b - -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 e1g1 e8g8 d4d5 e6d5 f3d4
E17	Queen's Indian Defense: Euwe Variation	rn1q1rk1/pbppbppp/1p2pn2/8/2PP4/1P3NP1/P3PPBP/RNBQ1RK1 b - -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 e1g1 e8g8 b2b3
E17	Queen's Indian Defense: Fianchetto Variation, Kramnik Variation	rn1q1rk1/pbppbppp/1p2pn2/8/2PP4/5NP1/PP2PPBP/RNBQR1K1 b - -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 e1g1 e8g8 f1e1
E17	Queen's Indian Defense: Opocensky Variation	rn1qk2r/pbppbppp/1p2p3/8/2PPn3/2N2NP1/PP1BPPBP/R2QK2R b KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 b1c3 f6e4 c1d2
E17	Queen's Indian Defense: Traditional Variation	rn1qk2r/pbppbppp/1p2pn2/8/2PP4/5NP1/PP2PPBP/RNBQK2R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7
E18	Queen's Indian Defense: Classical Variation, Tiviakov Defense	r2q1rk1/pbppbppp/np2pn2/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - -	g1f3 g8f6 c2c4 e7e6 g2g3 b7b6 f1g2 c8b7 e1g1 f8e7 b1c3 e8g8 d2d4 b8a6
E18	Queen's Indian Defense: Classical Variation, Traditional Variation, Nimzowitsch Line	rn1q1rk1/pbp1bppp/1p2pn2/3p4/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 e1g1 e8g8 b1c3 d7d5
E18	Queen's Indian Defense: Classical Variation, Traditional Variation	rn1q1rk1/pbppbppp/1p2pn2/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 b - -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 e1g1 e8g8 b1c3
E19	Queen's Indian Defense: Classical Variation, Traditional Variation, Main Line	rn1q1rk1/pbppbppp/1p2p3/8/2PP4/2Q2NP1/PP2PPBP/R1B2RK1 b - -	d2d4 g8f6 c2c4 e7e6 g1f3 b7b6 g2g3 c8b7 f1g2 f8e7 e1g1 e8g8 b1c3 f6e4 d1c2 e4c3 c2c3
E20	Nimzo-Indian Defense: Kmoch Variation	rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N2P2/PP2P1PP/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 f2f3
E20	Nimzo-Indian Defense: Mikenas Attack	rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2NQ4/PP2PPPP/R1B1KBNR b KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1d3
E20	Nimzo-Indian Defense	rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4
E20	Nimzo-Indian Defense: Romanishin Variation	rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N3P1/PP2PP1P/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 g2g3
E21	Nimzo-Indian Defense: Romanishin Variation, English Hybrid	rnbq1rk1/pp3ppp/4p3/3n4/1b1N4/2N3P1/PP2PPBP/R1BQK2R w KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 g1f3 c7c5 g2g3 c5d4 f3d4 e8g8 f1g2 d7d5 c4d5 f6d5
E21	Nimzo-Indian Defense: Romanishin Variation	rnbq1rk1/pp1p1ppp/4pn2/2p5/1bPP4/2N2NP1/PP2PPBP/R1BQK2R b KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 g1f3 c7c5 g2g3 e8g8 f1g2
E21	Nimzo-Indian Defense: Three Knights, Euwe Variation	rnbqk2r/pp1p1ppp/4p3/2pP4/1bP1n3/2N2N2/PP2PPPP/R1BQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 g1f3 c7c5 d4d5 f6e4
E21	Nimzo-Indian Defense: Three Knights Variation, Korchnoi Variation	rnbqk2r/pp1p1ppp/4pn2/2pP4/1bP5/2N2N2/PP2PPPP/R1BQKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 g1f3 c7c5 d4d5
E21	Nimzo-Indian Defense: Three Knights Variation	rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 g1f3
E21	Nimzo-Indian Defense: Three Knights Variation, Shocron Gambit	rnbqk2r/p2p1ppp/4pn2/1ppP4/1bP5/2N2N2/PP2PPPP/R1BQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 g1f3 f8b4 b1c3 c7c5 d4d5 b7b5
E22	Nimzo-Indian Defense: Spielmann Variation	rnbqk2r/pppp1ppp/4pn2/8/1bPP4/1QN5/PP2PPPP/R1B1KBNR b KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1b3
E23	Nimzo-Indian Defense: Spielmann, Stahlberg Variation	r1bqk2r/pp1p2pp/2n1p3/2n2p2/1bP5/2N2NP1/PPQBPP1P/R3KB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1b3 c7c5 d4c5 b8c6 g1f3 f6e4 c1d2 e4c5 b3c2 f7f5 g2g3
E23	Nimzo-Indian Defense: Spielmann Variation, Karlsbad Variation	r1bqk2r/pp1p1ppp/2n1p3/2P5/1bP5/1QN2N2/PP1nPPPP/R3KB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1b3 c7c5 d4c5 b8c6 g1f3 f6e4 c1d2 e4d2
E23	Nimzo-Indian Defense: Spielmann Variation, Romanovsky Gambit	r1bqk2r/pp1p1ppp/2n1pn2/2P5/1bP5/1QN5/PP2PPPP/R1B1KBNR w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1b3 c7c5 d4c5 b8c6
E23	Nimzo-Indian Defense: Spielmann Variation, Stahlberg Variation	r1bqk2r/pp1p1ppp/2n1p3/2n5/1bP5/1QN2N2/PP1BPPPP/R3KB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1b3 c7c5 d4c5 b8c6 g1f3 f6e4 c1d2 e4c5
E24	Nimzo-Indian Defense: Sämisch, Botvinnik Variation	rnbq1rk1/pp3ppp/4p3/2pn4/3P4/P1P1PP2/6PP/R1BQKBNR w KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 f2f3 d7d5 a2a3 b4c3 b2c3 c7c5 e2e3 e8g8 c4d5 f6d5
E24	Nimzo-Indian Defense: Sämisch Variation, Accelerated	rnbqk2r/pppp1ppp/4pn2/8/2PP4/P1P5/4PPPP/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 a2a3 b4c3 b2c3
E25	Nimzo-Indian Defense: Sämisch, Romanovsky Variation	rnbqk2r/pp4pp/4p3/2Pn1p2/8/P1P2P2/4P1PP/R1BQKBNR w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 f2f3 d7d5 a2a3 b4c3 b2c3 c7c5 c4d5 f6d5 d4c5 f7f5
E25	Nimzo-Indian Defense: Sämisch Variation, Keres Variation	rnbqk2r/pp3ppp/4p3/2Pn4/8/P1P2P2/4P1PP/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 f2f3 d7d5 a2a3 b4c3 b2c3 c7c5 c4d5 f6d5 d4c5
E25	Nimzo-Indian Defense: Sämisch Variation	rnbqk2r/pp3ppp/4pn2/2pP4/3P4/P1P2P2/4P1PP/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 f2f3 d7d5 a2a3 b4c3 b2c3 c7c5 c4d5
E26	Nimzo-Indian Defense: Sämisch Variation, O'Kelly Variation	rnbqk2r/p2p1ppp/1p2pn2/2p5/2PP4/P1P1P3/5PPP/R1BQKBNR w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 a2a3 b4c3 b2c3 c7c5 e2e3 b7b6
E26	Nimzo-Indian Defense: Sämisch Variation	rnbqk2r/pp1p1ppp/4pn2/2p5/2PP4/P1P1P3/5PPP/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 a2a3 b4c3 b2c3 c7c5 e2e3
E27	Nimzo-Indian Defense: Sämisch Variation	rnbq1rk1/pppp1ppp/4pn2/8/2PP4/P1P5/4PPPP/R1BQKBNR w KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 a2a3 b4c3 b2c3 e8g8
E28	Nimzo-Indian Defense: Sämisch Variation	rnbq1rk1/pppp1ppp/4pn2/8/2PP4/P1P1P3/5PPP/R1BQKBNR b KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 a2a3 b4c3 b2c3
E29	Nimzo-Indian Defense: Sämisch Variation, Capablanca Variation	r1bqnrk1/p2p1ppp/1pn1p3/2p5/2PPP3/P1PB4/4NPPP/R1BQK2R w KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 c7c5 f1d3 b8c6 a2a3 b4c3 b2c3 e8g8 g1e2 b7b6 e3e4 f6e8
E29	Nimzo-Indian Defense: Sämisch Variation	r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/R1BQK1NR w KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 c7c5 f1d3 b8c6 a2a3 b4c3 b2c3 e8g8
E30	Nimzo-Indian Defense: Leningrad Variation, Averbakh Gambit	rnbqk2r/p2p1pp1/4pn1p/1ppP4/1bP4B/2N5/PP2PPPP/R2QKBNR w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 c1g5 h7h6 g5h4 c7c5 d4d5 b7b5
E30	Nimzo-Indian Defense: Leningrad Variation	rnbqk2r/pppp1ppp/4pn2/6B1/1bPP4/2N5/PP2PPPP/R2QKBNR b KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 c1g5
E31	Nimzo-Indian Defense: Leningrad Variation, Benoni Defense	rnbqk2r/pp3pp1/3ppn1p/2pP4/1bP4B/2N5/PP2PPPP/R2QKBNR w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 c1g5 h7h6 g5h4 c7c5 d4d5 d7d6
E32	Nimzo-Indian Defense: Classical Variation, Keres Defense	rnbq1rk1/p1pp1ppp/1p2pn2/8/2PP4/P1Q5/1P2PPPP/R1B1KBNR w KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2 e8g8 a2a3 b4c3 c2c3 b7b6
E32	Nimzo-Indian Defense: Classical Variation	rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PPQ1PPPP/R1B1KBNR b KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2
E32	Nimzo-Indian Defense: Classical Variation, Vitolins-Adorjan Gambit	rnbq1rk1/p1pp1ppp/4pn2/1p6/2PP4/P1Q5/1P2PPPP/R1B1KBNR w KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2 e8g8 a2a3 b4c3 c2c3 b7b5
E33	Nimzo-Indian Defense: Classical Variation, Milner-Barry Variation	r1bqk2r/ppp2ppp/2nppn2/8/1bPP4/2N2N2/PPQ1PPPP/R1B1KB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2 b8c6 g1f3 d7d6
E33	Nimzo-Indian Defense: Classical Variation, Zurich Variation	r1bqk2r/pppp1ppp/2n1pn2/8/1bPP4/2N5/PPQ1PPPP/R1B1KBNR w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2 b8c6
E34	Nimzo-Indian Defense: Classical Variation, Belyavsky Gambit	rnb1k2r/ppp2ppp/5n2/4pq2/1b1P4/2N2N2/PP2PPPP/R1BQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2 d7d5 c4d5 d8d5 g1f3 d5f5 c2d1 e6e5
E34	Nimzo-Indian Defense: Classical Variation, Noa Variation	rnbqk2r/ppp2ppp/4pn2/3p4/1bPP4/2N5/PPQ1PPPP/R1B1KBNR w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2 d7d5
E35	Nimzo-Indian Defense: Classical, Noa Variation	rnbqk2r/ppp2ppp/5n2/3p4/1b1P4/2N5/PPQ1PPPP/R1B1KBNR w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2 d7d5 c4d5 e6d5
E36	Nimzo-Indian Defense: Classical, Noa Variation, Main Line	rnbqk2r/ppp2ppp/4p3/3p4/2PPn3/P1Q5/1P2PPPP/R1B1KBNR w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2 d7d5 a2a3 b4c3 c2c3 f6e4
E36	Nimzo-Indian Defense: Classical Variation, Noa Variation, Botvinnik Variation	r1bqk2r/ppp2ppp/2n1pn2/3p4/2PP4/P1Q5/1P2PPPP/R1B1KBNR w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2 d7d5 a2a3 b4c3 c2c3 b8c6
E36	Nimzo-Indian Defense: Classical Variation, Noa Variation	rnbqk2r/ppp2ppp/4pn2/3p4/1bPP4/P1N5/1PQ1PPPP/R1B1KBNR b KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2 d7d5 a2a3
E37	Nimzo-Indian Defense: Classical Variation, Noa Variation	rnbqk2r/ppp2ppp/4p3/3p4/2PPn3/P7/1PQ1PPPP/R1B1KBNR b KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2 d7d5 a2a3 b4c3 c2c3 f6e4 c3c2
E37	Nimzo-Indian Defense: Classical Variation, Noa Variation, San Remo Variation	r1bqk2r/ppp2ppp/2n5/3pp3/2PPn3/P3P3/1PQ2PPP/R1B1KBNR w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2 d7d5 a2a3 b4c3 c2c3 f6e4 c3c2 b8c6 e2e3 e6e5
E38	Nimzo-Indian Defense: Classical Variation, Berlin Variation	rnbqk2r/pp1p1ppp/4pn2/2p5/1bPP4/2N5/PPQ1PPPP/R1B1KBNR w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2 c7c5
E38	Nimzo-Indian Defense: Classical Variation, Berlin Variation, Steiner Variation	rnbqk2r/pp1p1ppp/4pn2/2P5/2P5/2b5/PPQ1PPPP/R1B1KBNR w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2 c7c5 d4c5 b4c3
E39	Nimzo-Indian Defense: Classical Variation, Berlin Variation, Macieja System	rnbq1rk1/p2p1ppp/1p2pn2/2b5/2P2B2/P1N2N2/1PQ1PPPP/R3KB1R b KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2 c7c5 d4c5 e8g8 a2a3 b4c5 g1f3 b7b6 c1f4
E39	Nimzo-Indian Defense: Classical Variation, Berlin Variation, Pirc Variation	rnbq1rk1/pp1p1ppp/4pn2/2P5/1bP5/2N5/PPQ1PPPP/R1B1KBNR w KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 d1c2 c7c5 d4c5 e8g8
E40	Nimzo-Indian Defense: Normal Line	rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3
E40	Nimzo-Indian Defense: Normal Variation, Taimanov Variation	r1bqk2r/pppp1ppp/2n1pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 b8c6
E41	Nimzo-Indian Defense: Hübner Variation, Main Line	r1bqk2r/pp3ppp/2nppn2/2p5/2PP4/2PBPN2/P4PPP/R1BQK2R w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 c7c5 f1d3 b8c6 g1f3 b4c3 b2c3 d7d6
E41	Nimzo-Indian Defense: Hübner Variation	rnbqk2r/pp1p1ppp/4pn2/2p5/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 c7c5
E41	Nimzo-Indian Defense: Normal Variation, Hübner Deferred	rnbq1rk1/pp1p1ppp/4pn2/2p5/1bPP4/2N1PN2/PP3PPP/R1BQKB1R w KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 c7c5 g1f3 e8g8
E42	Nimzo-Indian Defense: Hübner Variation, Rubinstein Variation, Main Line	rnbq1rk1/pp1p1ppp/4pn2/8/1bPP4/P1N5/1P2NPPP/R1BQKB1R b KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 c7c5 g1e2 c5d4 e3d4 e8g8 a2a3
E42	Nimzo-Indian Defense: Hübner Variation, Rubinstein Variation	rnbqk2r/pp1p1ppp/4pn2/2p5/1bPP4/2N1P3/PP2NPPP/R1BQKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 c7c5 g1e2
E42	Nimzo-Indian Defense: Hübner Variation, Rubinstein Variation, Sherbakov Attack	rnbq1rk1/pp1p1ppp/4pn2/2P5/1b1P4/2N5/PP2NPPP/R1BQKB1R b KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 c7c5 g1e2 c5d4 e3d4 e8g8 c4c5
E43	Nimzo-Indian Defense: St. Petersburg Variation	rnbqk2r/p1pp1ppp/1p2pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 b7b6
E44	Nimzo-Indian Defense: Fischer Variation	rnbqk2r/p1pp1ppp/1p2pn2/8/1bPP4/2N1P3/PP2NPPP/R1BQKB1R b KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 b7b6 g1e2
E45	Nimzo-Indian Defense: Normal Variation, Bronstein (Byrne) Variation	rn1qk2r/p1pp1ppp/bp2pn2/8/1bPP4/2N1P3/PP2NPPP/R1BQKB1R w KQkq -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 b7b6 g1e2 c8a6
E46	Nimzo-Indian Defense: Normal Variation	rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8
E46	Nimzo-Indian Defense: Reshevsky Variation	rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP2NPPP/R1BQKB1R b KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 g1e2
E46	Nimzo-Indian Defense: Simagin Variation	rnbq1rk1/ppp2ppp/3bpn2/3p4/2PP4/P1N1P3/1P2NPPP/R1BQKB1R w KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 g1e2 d7d5 a2a3 b4d6
E47	Nimzo-Indian Defense: Normal Variation, Bishop Attack	rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2NBP3/PP3PPP/R1BQK1NR b KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3
E48	Nimzo-Indian Defense: Normal Variation, Bishop Attack, Classical Defense	rnbq1rk1/ppp2ppp/4pn2/3p4/1bPP4/2NBP3/PP3PPP/R1BQK1NR w KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5
E48	Nimzo-Indian Defense: Ragozin Defense	r1bq1rk1/ppp2ppp/2n1pn2/3p4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1 b - -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 b8c6 e1g1
E49	Nimzo-Indian Defense: Normal Variation, Botvinnik System	rnbq1rk1/ppp2ppp/4pn2/3p4/2PP4/P1PBP3/5PPP/R1BQK1NR b KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 a2a3 b4c3 b2c3
E50	Nimzo-Indian Defense	rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1PN2/PP3PPP/R1BQKB1R b KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 g1f3
E51	Nimzo-Indian Defense: Normal Variation, Ragozin Variation	rnbq1rk1/ppp2ppp/4pn2/3p4/1bPP4/2N1PN2/PP3PPP/R1BQKB1R w KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 g1f3 d7d5
E51	Nimzo-Indian Defense: Normal Variation, Sämisch Deferred	rnbq1rk1/ppp2ppp/4pn2/3p4/1bPP4/P1N1PN2/1P3PPP/R1BQKB1R b KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 g1f3 d7d5 a2a3
E51	Nimzo-Indian Defense, Ragozin Variation	r1bq1rk1/ppp2ppp/2n1pn2/8/1bpP4/2NBPN2/PP3PPP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 b8c6 e1g1 d5c4
E52	Nimzo-Indian Defense: Normal Variation, Schlechter Defense	rnbq1rk1/p1p2ppp/1p2pn2/3p4/1bPP4/2NBPN2/PP3PPP/R1BQK2R w KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 b7b6
E53	Nimzo-Indian Defense: Normal Variation, Gligoric System, Keres Variation	rnbq1rk1/p4ppp/1p2pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 c7c5 e1g1 b7b6
E53	Nimzo-Indian Defense: Normal Variation, Gligoric System	r1bq1rk1/pp1n1ppp/4pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 c7c5 e1g1 b8d7
E53	Nimzo-Indian Defense: Normal Variation, Gligoric System	rnbq1rk1/pp3ppp/4pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQK2R w KQ -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 c7c5
E54	Nimzo-Indian Defense: Normal Variation, Gligoric System, Exchange at c4	rnbq1rk1/pp3ppp/4pn2/2p5/1bBP4/2N1PN2/PP3PPP/R1BQ1RK1 b - -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 c7c5 e1g1 d5c4 d3c4
E54	Nimzo-Indian Defense: Normal Variation, Gligoric System, Smyslov Variation	rnb2rk1/pp2qppp/4pn2/2p5/1bBP4/2N1PN2/PP3PPP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 c7c5 e1g1 d5c4 d3c4 d8e7
E55	Nimzo-Indian Defense: Normal Variation, Gligoric System, Bronstein Variation	r1bq1rk1/pp1n1ppp/4pn2/2p5/1bBP4/2N1PN2/PP3PPP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 c7c5 e1g1 d5c4 d3c4 b8d7
E56	Nimzo-Indian Defense: Normal Variation, Gligoric System, Bernstein Defense	r1bq1rk1/pp3ppp/2n1pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 c7c5 e1g1 b8c6
E58	Nimzo-Indian Defense: Normal Variation, Bernstein Defense, Exchange Line	r1bq1rk1/pp3ppp/2n1pn2/2pp4/2PP4/P1PBPN2/5PPP/R1BQ1RK1 b - -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 c7c5 e1g1 b8c6 a2a3 b4c3 b2c3
E59	Nimzo-Indian Defense: Normal Variation, Bernstein Defense	r1bq1rk1/pp3ppp/2n1pn2/2p5/2BP4/P1P1PN2/5PPP/R1BQ1RK1 b - -	d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5 g1f3 c7c5 e1g1 b8c6 a2a3 b4c3 b2c3 d5c4 d3c4
E60	Grünfeld Defense: Counterthrust Variation	rnbqk2r/ppp1ppbp/5np1/3p4/2PP4/6P1/PP2PPBP/RNBQK1NR w KQkq -	d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 d7d5
E60	Indian Game: Anti-Grünfeld, Adorjan Gambit	rnbqkb1r/p1pppp1p/5np1/1p1P4/2P5/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 g7g6 d4d5 b7b5
E60	Indian Game: Anti-Grünfeld, Advance Variation	rnbqkb1r/pppppp1p/5np1/3P4/2P5/8/PP2PPPP/RNBQKBNR b KQkq -	d2d4 g8f6 c2c4 g7g6 d4d5
E60	Indian Game: Anti-Grünfeld, Alekhine Variation, Leko Gambit	rnbqkb1r/pppp1p1p/5np1/4p3/2PP4/5P2/PP2P1PP/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 g7g6 f2f3 e7e5
E60	Indian Game: Anti-Grünfeld, Alekhine Variation	rnbqkb1r/pppppp1p/5np1/8/2PP4/5P2/PP2P1PP/RNBQKBNR b KQkq -	d2d4 g8f6 c2c4 g7g6 f2f3
E60	Indian Game: King's Indian Variation, Fianchetto Variation	rnbqk2r/ppppppbp/5np1/8/2PP4/6P1/PP2PPBP/RNBQK1NR b KQkq -	d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2
E60	Indian Game: West Indian Defense	rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -	d2d4 g8f6 c2c4 g7g6
E60	King's Indian Defense: Fianchetto Variation, Immediate Fianchetto	rnbqkb1r/pppppp1p/5np1/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq -	d2d4 g8f6 c2c4 g7g6 g2g3
E60	King's Indian Defense: Fianchetto Variation, Pterodactyl Variation	rnb1k2r/pp1pppbp/5np1/q1p5/2PP4/5NP1/PP2PPBP/RNBQK2R w KQkq -	d2d4 g8f6 g1f3 g7g6 c2c4 f8g7 g2g3 c7c5 f1g2 d8a5
E60	King's Indian Defense: Fianchetto Variation, Yugoslav System	rnbq1rk1/pp2ppbp/3p1np1/2p5/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w - -	d2d4 g8f6 c2c4 g7g6 g1f3 f8g7 g2g3 e8g8 f1g2 d7d6 e1g1 c7c5
E60	King's Indian Defense: Normal Variation, King's Knight Variation	rnbqkb1r/pppppp1p/5np1/8/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq -	d2d4 g8f6 g1f3 g7g6 c2c4
E60	King's Indian Defense: Santasiere Variation	rnbqk2r/ppppppbp/5np1/8/1PPP4/5N2/P3PPPP/RNBQKB1R b KQkq -	d2d4 g8f6 c2c4 g7g6 g1f3 f8g7 b2b4
E60	King's Indian Defense: Semi-Classical Variation, Benoni Variation	rnbq1rk1/pp2ppbp/2pp1np1/8/2PP4/2N1PN2/PP2BPPP/R1BQK2R w KQ -	c2c4 g8f6 g1f3 g7g6 d2d4 f8g7 b1c3 e8g8 e2e3 d7d6 f1e2 c7c6
E60	King's Indian Defense: Semi-Classical Variation, Hollywood Variation	r1bq1rk1/ppp1ppbp/2np1np1/8/2PP4/2N1PN2/PP2BPPP/R1BQK2R w KQ -	d2d4 g8f6 g1f3 g7g6 c2c4 f8g7 b1c3 e8g8 e2e3 d7d6 f1e2 b8c6
E60	Neo-Grünfeld Defense: Non- or Delayed Fianchetto	rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq -	d2d4 g8f6 g1f3 g7g6 c2c4 d7d5
E60	Queen's Pawn, Mengarini Attack	rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PPQ1PPPP/RNB1KBNR b KQkq -	d2d4 g8f6 c2c4 g7g6 d1c2
E61	King's Indian Defense	rnbqkb1r/pppppp1p/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 g7g6 b1c3
E61	King's Indian Defense: Semi-Classical Variation, Queenside Storm Line	r1bq1rk1/pppn1pbp/3p1np1/4p3/1PPP4/2N1PN2/P3BPPP/R1BQ1RK1 b - -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 g1f3 e8g8 e2e3 d7d6 f1e2 b8d7 e1g1 e7e5 b2b4
E61	King's Indian Defense: Semi-Classical Variation	rnbq1rk1/ppp1ppbp/3p1np1/8/2PP4/2N1PN2/PP2BPPP/R1BQK2R b KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 g1f3 e8g8 e2e3 d7d6 f1e2
E61	King's Indian Defense: Smyslov Variation	rnbqk2r/ppp1ppbp/3p1np1/6B1/2PP4/2N2N2/PP2PPPP/R2QKB1R b KQkq -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 g1f3 d7d6 c1g5
E62	King's Indian Defense: Fianchetto Variation, Delayed Fianchetto	rnbqk2r/ppp1ppbp/3p1np1/8/2PP4/2N2NP1/PP2PP1P/R1BQKB1R b KQkq -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 g1f3 d7d6 g2g3
E62	King's Indian Defense: Fianchetto Variation, Karlsbad Variation	r1bq1rk1/ppp1ppbp/2np1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQK2R w KQ -	d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 e8g8 b1c3 d7d6 g1f3 b8c6
E62	King's Indian Defense: Fianchetto Variation, Kavalek Defense	rnb2rk1/pp2ppbp/2pp1np1/q7/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 g7g6 g1f3 f8g7 g2g3 e8g8 f1g2 d7d6 e1g1 c7c6 b1c3 d8a5
E62	King's Indian Defense: Fianchetto Variation, Larsen Defense	rn1q1rk1/pp2ppbp/2pp1np1/5b2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - -	d2d4 g8f6 g1f3 g7g6 c2c4 f8g7 g2g3 e8g8 f1g2 d7d6 e1g1 c7c6 b1c3 c8f5
E62	King's Indian Defense: Fianchetto Variation, Lesser Simagin (Spassky)	r2q1rk1/ppp1ppbp/2np1np1/5b2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 e8g8 b1c3 d7d6 g1f3 b8c6 e1g1 c8f5
E62	King's Indian Defense: Fianchetto Variation, Simagin Variation	r2q1rk1/ppp1ppbp/2np1np1/8/2PP2b1/2N2NP1/PP2PPBP/R1BQ1RK1 w - -	g1f3 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 e8g8 e1g1 d7d6 d2d4 b8c6 b1c3 c8g4
E62	King's Indian Defense: Fianchetto Variation, Uhlmann-Szabo System	r1bq1rk1/ppp2pbp/2np1np1/4p3/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 g7g6 g1f3 f8g7 g2g3 e8g8 f1g2 d7d6 e1g1 b8c6 b1c3 e7e5
E63	King's Indian Defense: Fianchetto Variation, Panno Variation, Blockade Line	r1bq1rk1/1p3pbp/p2p1np1/n1pPp3/2P5/2N3P1/PPQNPPBP/R1B2RK1 w - e6	d2d4 g8f6 c2c4 g7g6 g1f3 f8g7 g2g3 e8g8 f1g2 d7d6 e1g1 b8c6 b1c3 a7a6 d4d5 c6a5 f3d2 c7c5 d1c2 e7e5
E63	King's Indian Defense: Fianchetto Variation, Panno Variation, Donner Line	1rbq1rk1/4pp1p/p2p1npb/n1pP4/2P5/2N3P1/PBQNPPBP/R4RK1 w - -	d2d4 g8f6 c2c4 g7g6 g1f3 f8g7 g2g3 e8g8 f1g2 d7d6 e1g1 b8c6 b1c3 a7a6 d4d5 c6a5 f3d2 c7c5 d1c2 a8b8 b2b3 b7b5 c1b2 b5c4 b3c4 g7h6
E63	King's Indian Defense: Fianchetto Variation, Panno Variation, Korchnoi Line	1rbq1rk1/2p1ppbp/p1np1np1/1p6/2PP4/2N1B1PP/PP1NPPB1/R2Q1RK1 b - -	d2d4 g8f6 c2c4 g7g6 g1f3 f8g7 g2g3 e8g8 f1g2 d7d6 e1g1 b8c6 b1c3 a7a6 h2h3 a8b8 c1e3 b7b5 f3d2
E63	King's Indian Defense: Fianchetto Variation, Panno Variation	r1bq1rk1/1pp1ppbp/p1np1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 g7g6 g1f3 f8g7 g2g3 e8g8 f1g2 d7d6 e1g1 b8c6 b1c3 a7a6
E64	King's Indian Defense: Fianchetto Variation, Yugoslav Variation, Rare Line	rnbq1rk1/pp2ppbp/3p1np1/2p5/2PP4/2N2NP1/PP2PPBP/R1BQK2R w KQ -	d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 e8g8 b1c3 d7d6 g1f3 c7c5
E65	King's Indian Defense: Fianchetto Variation, Yugoslav Variation, Exchange Line	r1bq1rk1/pp2ppbp/2n2np1/2p5/2P5/2N2NP1/PP2PPBP/R1BQ1RK1 w - -	g1f3 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 e8g8 e1g1 c7c5 d2d4 d7d6 b1c3 b8c6 d4c5 d6c5
E65	King's Indian Defense: Fianchetto Variation, Yugoslav Variation	rnbq1rk1/pp2ppbp/3p1np1/2p5/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 b - -	d2d4 g8f6 c2c4 g7g6 g1f3 f8g7 g2g3 e8g8 f1g2 d7d6 e1g1 c7c5 b1c3
E66	King's Indian Defense: Fianchetto Variation, Yugoslav Variation, Advance Line	r1bq1rk1/pp2ppbp/2np1np1/2pP4/2P5/2N2NP1/PP2PPBP/R1BQ1RK1 b - -	d2d4 g8f6 c2c4 g7g6 g1f3 f8g7 g2g3 e8g8 f1g2 d7d6 e1g1 c7c5 b1c3 b8c6 d4d5
E67	King's Indian Defense: Fianchetto Variation, Classical Fianchetto	r1bq1rk1/pppn1pbp/3p1np1/4p3/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 g7g6 g1f3 f8g7 g2g3 e8g8 f1g2 d7d6 e1g1 b8d7 b1c3 e7e5
E67	King's Indian Defense: Fianchetto Variation, Debrecen Defense	r1bq1rk1/pppnppbp/3p1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQK2R w KQ -	d2d4 g8f6 c2c4 g7g6 g2g3 f8g7 f1g2 e8g8 b1c3 d7d6 g1f3 b8d7
E67	King's Indian Defense: Fianchetto Variation, Double Fianchetto Attack	r1bq1rk1/pppn1pbp/3p1np1/4p3/2PP4/1PN2NP1/P3PPBP/R1BQ1RK1 b - -	d2d4 g8f6 g1f3 g7g6 g2g3 f8g7 f1g2 e8g8 e1g1 d7d6 c2c4 b8d7 b1c3 e7e5 b2b3
E67	King's Indian Defense: Fianchetto Variation, Hungarian Variation	r1bq1rk1/1ppnppbp/p2p1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - -	c2c4 g8f6 b1c3 g7g6 g2g3 f8g7 f1g2 e8g8 d2d4 d7d6 g1f3 b8d7 e1g1 a7a6
E68	King's Indian Defense: Fianchetto Variation, Long Variation	r1bqr1k1/1pp2pbp/3p1np1/p1n5/2PNP3/2N3PP/PP3PB1/R1BQR1K1 w - -	d2d4 g8f6 g1f3 g7g6 c2c4 f8g7 g2g3 e8g8 f1g2 d7d6 e1g1 b8d7 b1c3 e7e5 e2e4 e5d4 f3d4 f8e8 h2h3 d7c5 f1e1 a7a5
E68	King's Indian, Fianchetto, Classical Variation	r1bq1rk1/pppn1pbp/3p1np1/4p3/2PPP3/2N2NP1/PP3PBP/R1BQ1RK1 b - -	d2d4 g8f6 c2c4 g7g6 g1f3 f8g7 g2g3 e8g8 f1g2 d7d6 e1g1 b8d7 b1c3 e7e5 e2e4
E69	King's Indian Defense: Fianchetto Variation, Classical Main Line	r1bq1rk1/pp1n1pbp/2pp1np1/4p3/2PPP3/2N2NPP/PP3PB1/R1BQ1RK1 b - -	d2d4 g8f6 c2c4 g7g6 g1f3 f8g7 g2g3 e8g8 f1g2 d7d6 e1g1 b8d7 b1c3 e7e5 e2e4 c7c6 h2h3
E70	King's Indian Defense: Accelerated Averbakh Variation	rnbqk2r/ppp1ppbp/3p1np1/6B1/2PPP3/2N5/PP3PPP/R2QKBNR b KQkq -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 c1g5
E70	King's Indian Defense: Kramer Variation	rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP2NPPP/R1BQKB1R b KQkq -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1e2
E70	King's Indian Defense: Normal Variation	rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR w KQkq -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6
E70	King's Indian Defense: Normal Variation	rnbqk2r/ppppppbp/5np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4
E71	King's Indian Defense: Makogonov Variation	rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N4P/PP3PP1/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 h2h3
E72	King's Indian Defense: Normal Variation, Deferred Fianchetto	rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N3P1/PP3P1P/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g2g3
E72	King's Indian Defense: Pomar System	rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N3P1/PP2NPBP/R1BQK2R b KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g2g3 e8g8 f1g2 e7e5 g1e2
E73	King's Indian Defense: Averbakh Variation, Flexible Defense	rnbq1rk1/ppp1ppb1/3p1npp/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2 e8g8 c1g5 h7h6
E73	King's Indian Defense: Averbakh Variation, Geller Defense	r1bq1rk1/pppnppbp/3p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2 e8g8 c1g5 b8d7
E73	King's Indian Defense: Averbakh Variation, Modern Defense, Burgess Line	r1bq1rk1/pp2ppbp/n1pp1np1/6B1/2PPP3/2N5/PP1QBPPP/R3K1NR w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2 e8g8 c1g5 b8a6 d1d2 c7c6
E73	King's Indian Defense: Averbakh Variation, Modern Defense	r1bq1rk1/ppp1ppbp/n2p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2 e8g8 c1g5 b8a6
E73	King's Indian Defense: Averbakh Variation, Nc6 Defense	r1bq1rk1/ppp1ppbp/2np1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2 e8g8 c1g5 b8c6
E73	King's Indian Defense: Averbakh Variation	rnbq1rk1/ppp1ppbp/3p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR b KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2 e8g8 c1g5
E73	King's Indian Defense: Averbakh Variation, Spanish Defense	rnbq1rk1/1pp1ppbp/p2p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2 e8g8 c1g5 a7a6
E73	King's Indian Defense: Normal Variation, Standard Development	rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP2BPPP/R1BQK1NR b KQkq -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2
E73	King's Indian Defense: Semi-Averbakh System	rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N1B3/PP2BPPP/R2QK1NR b KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2 e8g8 c1e3
E74	King's Indian Defense: Averbakh Variation, Benoni Defense, Advance Variation	rnbq1rk1/pp2ppbp/3p1np1/2pP2B1/2P1P3/2N5/PP2BPPP/R2QK1NR b KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2 e8g8 c1g5 c7c5 d4d5
E74	King's Indian Defense: Averbakh Variation, Benoni Defense, Exchange Variation	rnbq1rk1/pp2ppbp/3p1np1/2P3B1/2P1P3/2N5/PP2BPPP/R2QK1NR b KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2 e8g8 c1g5 c7c5 d4c5
E74	King's Indian Defense: Averbakh Variation, Benoni Defense	rnbq1rk1/pp2ppbp/3p1np1/2p3B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2 e8g8 c1g5 c7c5
E75	King's Indian, Averbakh, Main Line	rnbq1rk1/pp3pbp/3ppnp1/2pP2B1/2P1P3/2N5/PP2BPPP/R2QK1NR w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2 e8g8 c1g5 c7c5 d4d5 e7e6
E76	King's Indian Defense: Four Pawns Attack, Dynamic Attack	rnbq1rk1/pp2ppbp/3p1np1/2pP4/2P1PP2/2N2N2/PP4PP/R1BQKB1R b KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f4 e8g8 g1f3 c7c5 d4d5
E76	King's Indian Defense: Four Pawns Attack, Modern Defense	r1bqk2r/ppp1ppbp/n2p1np1/8/2PPPP2/2N5/PP4PP/R1BQKBNR w KQkq -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f4 b8a6
E76	King's Indian Defense: Four Pawns Attack	rnbqk2r/ppp1ppbp/3p1np1/8/2PPPP2/2N5/PP4PP/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f4
E77	King's Indian Defense: Four Pawns Attack, Florentine Gambit	rnbq1rk1/pp3pbp/3p1np1/2ppP3/2P2P2/2N2N2/PP2B1PP/R1BQK2R b KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f4 e8g8 g1f3 c7c5 d4d5 e7e6 f1e2 e6d5 e4e5
E77	King's Indian Defense: Four Pawns Attack, Normal Attack	rnbq1rk1/pp3pbp/3ppnp1/2pP4/2P1PP2/2N2N2/PP2B1PP/R1BQK2R b KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f4 e8g8 g1f3 c7c5 d4d5 e7e6 f1e2
E77	King's Indian Defense: Four Pawns Attack	rnbq1rk1/ppp1ppbp/3p1np1/8/2PPPP2/2N5/PP2B1PP/R1BQK1NR b KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f1e2 e8g8 f2f4
E77	King's Indian, Six Pawns Attack	r1bq1rk1/pp4bp/2nppnp1/2p5/2P1PPPP/2N5/PP2B3/R1BQK1NR b KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f4 e8g8 f1e2 c7c5 d4d5 e7e6 d5e6 f7e6 g2g4 b8c6 h2h4
E78	King's Indian Defense: Four Pawns Attack, Fluid Attack	rnbq1rk1/pp2ppbp/3p1np1/2p5/2PPPP2/2N2N2/PP2B1PP/R1BQK2R b KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f4 e8g8 g1f3 c7c5 f1e2
E79	King's Indian Defense: Four Pawns Attack, Exchange Variation	r1bq1rk1/pp2ppbp/2np1np1/8/2PNPP2/2N1B3/PP2B1PP/R2QK2R b KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f4 e8g8 g1f3 c7c5 f1e2 c5d4 f3d4 b8c6 c1e3
E80	King's Indian Defense: Sämisch Variation	rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N2P2/PP4PP/R1BQKBNR b KQkq -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3
E81	King's Indian Defense: Sämisch Variation, Bobotsov-Korchnoi-Petrosian Variation	rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2P2/PP2N1PP/R1BQKB1R b KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 g1e2
E81	King's Indian Defense: Sämisch Variation, Byrne Defense	rnbq1rk1/1p2ppbp/p1pp1np1/8/2PPP3/2NBBP2/PP4PP/R2QK1NR w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 c1e3 c7c6 f1d3 a7a6
E81	King's Indian Defense: Sämisch Variation, Normal Defense	rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2P2/PP4PP/R1BQKBNR w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8
E81	King's Indian Defense: Steiner Attack	rnbq1rk1/ppp1ppbp/3p1np1/6B1/2PPP3/2N2P2/PP4PP/R2QKBNR b KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 c1g5
E82	King's Indian Defense: Sämisch Variation, Double Fianchetto	rnbq1rk1/p1p1ppbp/1p1p1np1/8/2PPP3/2N1BP2/PP4PP/R2QKBNR w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 c1e3 b7b6
E83	King's Indian Defense: Sämisch Variation, Panno Formation	r1bq1rk1/1pp1ppbp/p1np1np1/8/2PPP3/2N1BP2/PP2N1PP/R2QKB1R w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 c1e3 b8c6 g1e2 a7a6
E83	King's Indian Defense: Sämisch Variation, Yates Defense	r1bq1rk1/ppp1ppbp/2np1np1/8/2PPP3/2N1BP2/PP4PP/R2QKBNR w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 c1e3 b8c6
E83	King's Indian, Sämisch, Ruban Variation	1rbq1rk1/ppp1ppbp/2np1np1/8/2PPP3/2N1BP2/PP2N1PP/R2QKB1R w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 c1e3 b8c6 g1e2 a8b8
E84	King's Indian, Sämisch, Panno Main Line	1rbq1rk1/1pp1ppbp/p1np1np1/8/2PPP3/2N1BP2/PP1QN1PP/R3KB1R w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 c1e3 b8c6 g1e2 a7a6 d1d2 a8b8
E85	King's Indian Defense: Sämisch Variation, Orthodox Variation	rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N1BP2/PP4PP/R2QKBNR w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 c1e3 e7e5
E86	King's Indian Defense: Sämisch Variation	rnbq1rk1/pp3pbp/2pp1np1/4p3/2PPP3/2N1BP2/PP2N1PP/R2QKB1R w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 c1e3 e7e5 g1e2 c7c6
E87	King's Indian Defense: Sämisch Variation, Bronstein Defense	rnb2rk1/ppp2pbp/3p2p1/3Pp3/2P1P2Q/2N1nP2/PP2K2P/R5NR b - -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 c1e3 e7e5 d4d5 f6h5 d1d2 d8h4 g2g3 h5g3 d2f2 g3f1 f2h4 f1e3 e1e2
E87	King's Indian Defense: Sämisch Variation, Closed Variation	rnbq1rk1/ppp2pbp/3p1np1/3Pp3/2P1P3/2N1BP2/PP4PP/R2QKBNR b KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 c1e3 e7e5 d4d5
E87	King's Indian, Sämisch, Orthodox, Bronstein Variation	rnb2rk1/ppp2pbp/3p2p1/3Pp3/2n1P2Q/2N2P2/PP2K2P/R5NR w - -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 c1e3 e7e5 d4d5 f6h5 d1d2 d8h4 g2g3 h5g3 d2f2 g3f1 f2h4 f1e3 e1e2 e3c4
E89	King's Indian Defense: Sämisch Variation, Closed Variation, Main Line	rnbq1rk1/pp3pbp/3p1np1/3pp3/2P1P3/2N1BP2/PP2N1PP/R2QKB1R w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 f2f3 e8g8 c1e3 e7e5 g1e2 c7c6 d4d5 c6d5
E90	King's Indian Defense: Larsen Variation	rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N1BN2/PP3PPP/R2QKB1R b KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 c1e3
E90	King's Indian Defense: Normal Variation, Rare Defenses	rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R b KQkq -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3
E90	King's Indian Defense: Zinnowitz Variation	rnbq1rk1/ppp1ppbp/3p1np1/6B1/2PPP3/2N2N2/PP3PPP/R2QKB1R b KQ -	g1f3 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 d2d4 e8g8 c1g5
E91	King's Indian Defense: Kazakh Variation	r1bq1rk1/ppp1ppbp/n2p1np1/8/2PPP3/2N2N2/PP2BPPP/R1BQK2R w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 b8a6
E91	King's Indian Defense: Orthodox Variation	rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP2BPPP/R1BQK2R b KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2
E92	King's Indian Defense: Exchange Variation	rnbq1rk1/ppp2pbp/3p1np1/4P3/2P1P3/2N2N2/PP2BPPP/R1BQK2R b KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 d4e5
E92	King's Indian Defense: Orthodox Variation, Gligoric-Taimanov System	rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N1BN2/PP2BPPP/R2QK2R b KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 c1e3
E92	King's Indian Defense: Orthodox Variation	rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQK2R w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5
E92	King's Indian Defense: Petrosian Variation	rnbq1rk1/ppp2pbp/3p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQK2R b KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 d4d5
E92	King's Indian Defense: Petrosian Variation, Stein Defense	rnbq1rk1/1pp2pbp/3p1np1/p2Pp3/2P1P3/2N2N2/PP2BPPP/R1BQK2R w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 d4d5 a7a5
E93	King's Indian Defense: Petrosian Variation, Keres Defense	r1bq1rk1/pppn1pb1/3p3p/3Pp1pn/2P1P2P/2N2NB1/PP2BPP1/R2QK2R b KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 d4d5 b8d7 c1g5 h7h6 g5h4 g6g5 h4g3 f6h5 h2h4
E93	King's Indian Defense: Petrosian Variation, Normal Defense	r1bq1rk1/pppn1pbp/3p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQK2R w KQ -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 d4d5 b8d7
E94	King's Indian Defense: Orthodox Variation, Donner Defense	rnbq1rk1/pp3pbp/2pp1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 c7c6
E94	King's Indian Defense: Orthodox Variation, Glek Defense	r1bq1rk1/ppp2pbp/n2p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8a6
E94	King's Indian Defense: Orthodox Variation, Positional Defense, Closed Line	r1bq1rk1/pppn1pbp/3p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQ1RK1 b - -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 b8d7 e1g1 e7e5 d4d5
E94	King's Indian Defense: Orthodox Variation, Positional Defense	r1bq1rk1/pppn1pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 d7d6 b1c3 b8d7 e2e4 e7e5 g1f3 g7g6 f1e2 f8g7 e1g1 e8g8
E94	King's Indian Defense: Orthodox Variation	rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 b - -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1
E94	King's Indian Defense: Orthodox Variation, Ukrainian Defense	rnbq1rk1/1pp2pbp/3p1np1/p3p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 a7a5
E95	King's Indian, Orthodox	r1bq1rk1/pppn1pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQR1K1 b - -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8d7 f1e1
E96	King's Indian Defense: Orthodox Variation, Positional Defense, Main Line	r1bq1rk1/1p1n1pbp/2pp1np1/p3p3/2PPP3/2N2N2/PP3PPP/R1BQRBK1 w - -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8d7 f1e1 c7c6 e2f1 a7a5
E97	King's Indian Defense: Orthodox Variation, Aronin-Taimanov Defense	r1bq1rk1/ppp2pbp/2np1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w - -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6
E97	King's Indian Defense: Orthodox Variation, Bayonet Attack	r1bq1rk1/ppp1npbp/3p1np1/3Pp3/1PP1P3/2N2N2/P3BPPP/R1BQ1RK1 b - -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 b2b4
E97	King's Indian Defense: Orthodox Variation, Bayonet Attack, Sokolov's Line	r1bq1rk1/ppp1npbp/3p2p1/3Pp2n/1PP1P3/2N2N2/P3BPPP/R1BQR1K1 b - -	g1f3 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 e8g8 d2d4 d7d6 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 b2b4 f6h5 f1e1
E97	King's Indian Defense: Orthodox Variation, Bayonet Attack, Yepishin's Line	r1bq1rk1/ppp1npbp/3p2p1/3Pp2n/1PP1P3/2N2N2/P1Q1BPPP/R1B2RK1 b - -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 b2b4 f6h5 d1c2
E97	King's Indian Defense: Orthodox Variation, Korchnoi Attack	r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N2N2/PP1BBPPP/R2Q1RK1 b - -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 c1d2
E97	King's Indian Defense: Orthodox Variation, Modern System	r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N5/PP1NBPPP/R1BQ1RK1 b - -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 f3d2
E98	King's Indian Defense: Orthodox Variation, Classical System, Kozul Gambit	r1bq1rk1/pppn2bp/3p2n1/2PPp1p1/4Pp2/2N2P2/PP2BBPP/2RQNRK1 b - -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 f3e1 f6d7 c1e3 f7f5 f2f3 f5f4 e3f2 g6g5 a1c1 e7g6 c4c5
E98	King's Indian Defense: Orthodox Variation, Classical System, Neo-Classical Line	r1bq1rk1/pppnnpbp/3p2p1/3Pp3/2P1P3/2N1B3/PP2BPPP/R2QNRK1 b - -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 f3e1 f6d7 c1e3
E98	King's Indian Defense: Orthodox Variation, Classical System	r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N5/PP2BPPP/R1BQNRK1 b - -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 f3e1
E99	King's Indian Defense: Orthodox Variation, Classical System, Benko Attack	r1bq1rk1/pppnn1bp/3p2p1/3Ppp2/2P1P1P1/2N2P2/PP2B2P/R1BQNRK1 b - -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 f3e1 f6d7 f2f3 f7f5 g2g4
E99	King's Indian Defense: Orthodox Variation, Classical System, Traditional Line	r1bq1rk1/pppnn1bp/3p2p1/3Ppp2/2P1P3/2N2P2/PP2B1PP/R1BQNRK1 w - -	d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8 f1e2 e7e5 e1g1 b8c6 d4d5 c6e7 f3e1 f6d7 f2f3 f7f5`);