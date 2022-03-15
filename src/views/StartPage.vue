<template>
    <p>Login</p>

    <input placeholder="Type username here" />

    <div>
        <p>Difficulty</p>
        <div>
            <input type="checkbox" id="easy" name="easy" />
            <label for="easy">Easy</label>
        </div>
        <div>
            <input type="checkbox" id="medium" name="medium" />
            <label for="medium">Medium</label>
        </div>
        <div>
            <input type="checkbox" id="hard" name="hard" />
            <label for="hard">Hard</label>
        </div>
    </div>

    <div>
        <p>How many questions</p>
        <div>
            <input type="checkbox" id="questions3" name="questions3" />
            <label for="questions3">3 questions</label>
        </div>
        <div>
            <input type="checkbox" id="questions5" name="questions5" />
            <label for="questions5">5 questions</label>
        </div>
        <div>
            <input type="checkbox" id="questions10" name="questions10" />
            <label for="questions10">10 questions</label>
        </div>
    </div>

    <div>
        <p>Extra incluted catagories</p>
        <div>
            <input type="checkbox" id="catagoryGames" name="catagoryGames" />
            <label for="catagoryGames">Entertainment: Video Games</label>
        </div>
        <div>
            <input type="checkbox" id="catagoryMovies" name="catagoryMovies" />
            <label for="catagoryMovies">Entertainment: Movies</label>
        </div>
        <div>
            <input type="checkbox" id="catagoryBooks" name="catagoryBooks" />
            <label for="catagoryBooks">Entertainment: Books</label>
        </div>
    </div>

    <button>Start</button>

</template>