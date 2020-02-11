
function computerPlay() {
    // function to generate computers(bot) choice 
    const random = Math.random() * 3;
    return random < 1 ? 'Rock' : random < 2 ? 'Paper' : 'Scissor';
}

function playRound() {
    let bot = computerPlay().toLowerCase();

    let user = prompt('Type any one (Rock/Paper/Scissor)').toLowerCase().trim();

    if (user === bot)
        return 'Draw';

    // Rock scenarios
    if (user === 'rock' && bot === 'paper')
        return 'You Lose';
    if (user === 'rock' && bot === 'scissor')
        return 'You Win';

    // Paper scenarios
    if (user === 'paper' && bot === 'scissor')
        return 'You Lose';
    if (user === 'paper' && bot === 'rock')
        return 'You Win';

    // Scissor scenarios
    if (user === 'scissor' && bot === 'rock')
        return 'You Lose';
    if (user === 'scissor' && bot === 'paper')
        return 'You Win';
}

function game() {
    // Plays game of 5 rounds
    let i = 1,
        score,
        userScore = 0,
        botScore = 0;

    alert('Best of 5 begins');

    while (i <= 5) {
        score = playRound().toLowerCase().replace(/\s/g, '');
        if (score === 'youwin') {
            console.log(`You win round ${i}`);
            userScore += 1;
        }
        if (score === 'youlose') {
            console.log(`You lose round ${i}`);
            botScore += 1;
        }
        if (score === 'draw') {
            console.log(`Draw round ${i}`);
            botScore += 1;
            userScore += 1;
        }

        i++;
    }

    userScore > botScore ? console.log('You win the game') :
        userScore < botScore ? console.log('You lost the game') :
            console.log('Draw');
    console.log(`Score: ${userScore}-${botScore}`);
}
