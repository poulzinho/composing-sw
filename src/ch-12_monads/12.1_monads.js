export const flatMap = (f, arr) => [].concat(...arr.map(f));

export const Monad = value => ({
    flatMap: f => {
        /*
        console.log('** flatMap');
        console.log('-- f', f.toString());
        console.log('-- value', value);
         */
        return f(value)
    },
    map(f) {
        /*
        console.log('* map');
        console.log('- f', f.toString());
        console.log('- value', value);
         */

        return this.flatMap(a => {
            /*
            console.log('exec flatMap f');
            console.log('--- f', f.toString());
            console.log('--- a', a);
            console.log('--- f(a)', f(a));
            console.log('--- Monad.of', Monad.of(f(a)));
             */
            return Monad.of(f(a))
        });
    }
});

Monad.of = x => {
    // console.log('*** Monad(x)', x);
    return Monad(x)
};
