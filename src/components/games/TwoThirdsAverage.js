import { useState } from 'react';
import style from '../../styles/TwoThirdsAverage.module.css';

function TwoThirdsAverage(props) {

    // used to display info on screen
    const [closest, setClosest] = useState(0);
    const [avg, setAvg] = useState(0);
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(100);
    const [players, setPlayers] = useState(80);
    const [input, setInput] = useState(0);
    const [wins, setWins] = useState(0);

    // simulates a given number of players picking a random integer in a given range
    // updates the display to show the simulation information
    function simulate(num, min, max, input = 0) {
        let sum = 0;
        let choices = [];
        let range = max - min + 1;
        if (input > 0) {
            choices.push(input);
        }
        while (choices.length < num) {
            let rand = Math.floor(Math.random() * range) + parseInt(min);
            sum += rand;
            choices.push(rand);
        }
        const twoThreeAvg = (2/3) * (sum / num);
        let newClosest = choices[0];
        choices.forEach((n) => {
            if (Math.abs(twoThreeAvg - n) < Math.abs(twoThreeAvg - newClosest)) {
                newClosest = n;
            }
        });
        setClosest(newClosest);
        setAvg(twoThreeAvg);
    }

    // simulates 300 times with your input
    function sim300(num, min, max, input) {
        let newWins = 0;
        for (let i = 0 ; i < 300 ; i++) {
            let sum = 0;
            let choices = [];
            let range = max - min + 1;
            choices.push(input); // always uses your input
            while (choices.length < num) {
                let rand = Math.floor(Math.random() * range) + parseInt(min);
                sum += rand;
                choices.push(rand);
            }
            const twoThreeAvg = (2/3) * (sum / num);
            let newClosest = choices[0];
            choices.forEach((n) => {
                if (Math.abs(twoThreeAvg - n) < Math.abs(twoThreeAvg - newClosest)) {
                    newClosest = n;
                }
            });
            // eslint-disable-next-line eqeqeq
            if (newClosest == input) {
                newWins++;
            }
        }
        setWins(newWins);
    }

    function simAll300(num, min, max) {
        let arr = [];
        for (let n = 1 ; n <= 100 ; n++) {
            let newWins = 0;
            for (let i = 0 ; i < 300 ; i++) {
                let sum = 0;
                let choices = [];
                let range = max - min + 1;
                while (choices.length < num) {
                    let rand = Math.floor(Math.random() * range) + parseInt(min);
                    sum += rand;
                    choices.push(rand);
                }
                const twoThreeAvg = (2/3) * (sum / num);
                let newClosest = choices[0];
                choices.forEach((nm) => {
                    if (Math.abs(twoThreeAvg - nm) < Math.abs(twoThreeAvg - newClosest)) {
                        newClosest = nm;
                    }
                });
                // eslint-disable-next-line eqeqeq
                if (newClosest == n) {
                    newWins++;
                }
            }
            arr.push({
                num: n,
                wins: newWins
            });
        }
        console.log(arr);
    }

    return (
        <div id="container" className={style.container}>
            <h1 id="mainHeader" className={style.mainHeader}>Two Thirds Average</h1>
            <div id="content" className={style.content}>
                <div className={style.inputs}>
                    <h4>Minimum</h4>
                    <input type="number" min={1} max={100} defaultValue={1} onChange={(e) => setMin(e.target.value)} />
                    <h4>Maximum</h4>
                    <input type="number" min={1} max={100} defaultValue={100} onChange={(e) => setMax(e.target.value)} />
                    <h4>Number of players</h4>
                    <input type="number" defaultValue={80} onChange={(e) => setPlayers(e.target.value)} />
                    <h4>Your input (optional)</h4>
                    <input type="number" min={1} max={100} defaultValue={0} onChange={(e) => setInput(e.target.value)} />
                </div>
                <div className={style.gameRight}>
                    <div className={style.results}>
                        <div>
                            <h3>Winning Number</h3>
                            {closest}
                        </div>
                        <div>
                            <h3>2/3rds of the Average</h3>
                            {avg}
                        </div>
                        <div>
                            <h3>Your wins (for 300 sim)</h3>
                            {wins}
                        </div>
                    </div>
                    <div className={style.buttons}>
                        <button className={style.button} onClick={() => simulate(players, min, max)}>Simulate</button>
                        <button className={style.button} onClick={() => simulate(players, min, max, input)}>Simulate with input</button>
                        <button className={style.button} onClick={() => sim300(players, min, max, input)}>Run 300 simulations with input (only displays your wins)</button>
                        <button className={style.button} onClick={() => simAll300(players, min, max)}>Simulate all numbers 300 times (prints to console)</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TwoThirdsAverage;