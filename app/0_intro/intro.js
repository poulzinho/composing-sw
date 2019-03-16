export default {

    calculate (value) {

        const compose = (f, g) => x => f(g(x));

        const double = n => n * 2;
        const increment = n => n + 1;

        return compose(double, increment)(value);
    }
}
