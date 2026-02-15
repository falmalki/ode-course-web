// ODE Course Data - 20+ Examples Per Section
const courseData = {
    modules: [
        {
            id: 1,
            title: "Introduction to ODEs",
            subtitle: "Fundamentals and classification",
            duration: "3 hours",
            week: "Week 1",
            sections: [
                {
                    title: "What is a Differential Equation?",
                    content: `<h2>Definition</h2>
<p>A <strong>differential equation</strong> is a mathematical equation that relates a function with its derivatives.</p>

<h2>Basic Examples</h2>

<p><strong>Example 1.1:</strong> The equation $\\frac{dy}{dx} = 2x$ has solution $y = x^2 + C$</p>

<p><strong>Example 1.2:</strong> Newton's Second Law: $F = ma$ leads to differential equations describing motion.>Why</p>

<h2 Study ODEs?</h2>
<ul>
<li><strong>Physics:</strong> Newton's laws, Maxwell's equations, quantum mechanics</li>
<li><strong>Engineering:</strong> Control systems, signal processing, circuits</li>
<li><strong>Biology:</strong> Population dynamics, epidemiology</li>
<li><strong>Economics:</strong> Growth models, option pricing</li>
</ul>

<h2>Example 1.3: Population Growth</h2>
<p>The Malthusian model: $\frac{dP}{dt} = rP$ has solution $P(t) = P_0 e^{rt}$</p>

<h2>Example 1.4: Radioactive Decay</h2>
<p>$\frac{dN}{dt} = -kN$ gives $N(t) = N_0 e^{-kt}$</p>

<h2>Example 1.5: Simple Harmonic Motion</h2>
<p>$\frac{d^2x}{dt^2} = -\omega^2 x$ has solution $x(t) = A\cos(\omega t) + B\sin(\omega t)$</p>

<h2>Example 1.6: Damped Oscillation</h2>
<p>$\frac{d^2x}{dt^2} + 2\zeta\omega\frac{dx}{dt} + \omega^2 x = 0$ describes damped motion.</p>

<h2>Example 1.7: Heat Equation</h2>
<p>$\frac{\partial u}{\partial t} = \alpha\frac{\partial^2 u}{\partial x^2}$ describes heat flow.</p>

<h2>Example 1.8: Wave Equation</h2>
<p>$\frac{\partial^2 u}{\partial t^2} = c^2\frac{\partial^2 u}{\partial x^2}$ describes wave propagation.</p>

<h2>Example 1.9: Logistic Growth</h2>
<p>$\frac{dP}{dt} = rP(1 - \frac{P}{K})$ models population with carrying capacity $K$.</p>

<h2>Example 1.10: Chemical Kinetics</h2>
<p>For reaction $A \to B$: $\frac{dA}{dt} = -kA$, giving $A(t) = A_0 e^{-kt}$.</p>

<h2>Example 1.11: RC Circuit</h2>
<p>$RC\frac{dV}{dt} + V = V_{in}$ describes voltage in an RC circuit.</p>

<h2>Example 1.12: Pendulum</h2>
<p>$\frac{d^2\theta}{dt^2} + \frac{g}{L}\sin\theta = 0$ for a pendulum.</p>

<h2>Example 1.13: Predator-Prey</h2>
<p>Lotka-Volterra: $\frac{dx}{dt} = \alpha x - \beta xy$, $\frac{dy}{dt} = \delta xy - \gamma y$</p>

<h2>Example 1.14: Falling Body with Air Resistance</h2>
<p>$m\frac{dv}{dt} = mg - kv^2$ models falling with drag.</p>

<h2>Example 1.15: Mixing Problem</h2>
<p>$\frac{dA}{dt} = \text{inflow rate} - \text{outflow rate}$ for salt concentration.</p>

<h2>Example 1.16: Spread of Disease</h2>
<p>SIR model: $\frac{dS}{dt} = -\beta SI$, $\frac{dI}{dt} = \beta SI - \gamma I$</p>

<h2>Example 1.17: Interest Compounding</h2>
<p>Continuous: $\frac{dA}{dt} = rA$ gives $A(t) = A_0 e^{rt}$</p>

<h2>Example 1.18: Newton's Law of Cooling</h2>
<p>$\frac{dT}{dt} = -k(T - T_{env})$</p>

<h2>Example 1.19: RL Circuit</h2>
<p>$L\frac{dI}{dt} + RI = V(t)$ for an RL circuit.</p>

<h2>Example 1.20: Beam Bending</h2>
<p>$EI\frac{d^4y}{dx^4} = w(x)$ describes beam deflection.</p>`
                },
                {
                    title: "Classification of ODEs",
                    content: `<h2>By Order</h2>

<p><strong>Example 2.1:</strong> First order: $\frac{dy}{dx} = 2x$</p>
<p><strong>Example 2.2:</strong> Second order: $\frac{d^2y}{dx^2} + y = 0$</p>
<p><strong>Example 2.3:</strong> Third order: $y''' + y'y = \sin x$</p>

<h2>By Linearity</h2>

<p><strong>Example 2.4:</strong> Linear: $y'' + 3y' + 2y = \sin x$</p>
<p><strong>Example 2.5:</strong> Nonlinear: $y'' + y^2 = 1$ (contains $y^2$)</p>
<p><strong>Example 2.6:</strong> Nonlinear: $y' = y^2$</p>
<p><strong>Example 2.7:</strong> Nonlinear: $(\frac{dy}{dx})^2 + y = 1$</p>

<h2>By Homogeneity</h2>

<p><strong>Example 2.8:</strong> Homogeneous: $y'' - 4y = 0$</p>
<p><strong>Example 2.9:</strong> Non-homogeneous: $y'' - 4y = e^x$</p>

<h2>By Degree</h2>

<p><strong>Example 2.10:</strong> First degree: $(y')^2 + y = 1$ can be written as first degree</p>
<p><strong>Example 2.11:</strong> Second degree: $(y'')^2 + y = 1$</p>

<h2>Ordinary vs Partial</h2>

<p><strong>Example 2.12:</strong> Ordinary (ODE): $\frac{dy}{dx} = x + y$</p>
<p><strong>Example 2.13:</strong> Partial (PDE): $\frac{\partial u}{\partial t} = \frac{\partial^2 u}{\partial x^2}$</p>

<h2>Example 2.14: Linear with Constant Coefficients</h2>
<p>$y'' + 3y' - 4y = 0$ - coefficients are constants.</p>

<h2>Example 2.15: Linear with Variable Coefficients</h2>
<p>$x^2y'' + xy' + y = 0$ - Cauchy-Euler equation.</p>

<h2>Example 2.16: Exact Equation</h2>
<p>$M(x,y)dx + N(x,y)dy = 0$ where $\partial M/\partial y = \partial N/\partial x$</p>

<h2>Example 2.17: Separable Equation</h2>
<p>$\frac{dy}{dx} = g(x)h(y)$ can be separated.</p>

<h2>Example 2.18: Homogeneous of Degree Zero</h2>
<p>$f(tx, ty) = t^0 f(x,y)$</p>

<h2>Example 2.19: Autonomous ODE</h2>
<p>$\frac{dy}{dx} = f(y)$ does not explicitly depend on $x$.</p>

<h2>Example 2.20: Non-Autonomous ODE</h2>
<p>$\frac{dy}{dx} = x + y$ depends explicitly on $x$.</p>`
                },
                {
                    title: "Existence and Uniqueness",
                    content: `<h2>Picard-Lindelöf Theorem</h2>

<p><strong>Example 3.1:</strong> $y' = \sqrt{y}$, $y(0) = 0$ has multiple solutions.</p>

<h2>Conditions for Uniqueness</h2>

<p><strong>Example 3.2:</strong> $y' = f(x,y)$ with $f$ and $\partial f/\partial y$ continuous near $(x_0,y_0)$.</p>

<h2>Example 3.3: Lipschitz Condition</h2>
<p>If $|f(x,y_1) - f(x,y_2)| \leq L|y_1 - y_2|$, solution is unique.</p>

<h2>Example 3.4: Non-Lipschitz at Point</h2>
<p>$y' = \sqrt{y}$ is not Lipschitz at $y = 0$.</p>

<h2>Example 3.5: Unique Solution</h2>
<p>$y' = x + y$, $y(0) = 1$ has unique solution.</p>

<h2>Example 3.6: Boundary Value Problem</h2>
<p>$y'' + y = 0$, $y(0) = 0$, $y(\pi) = 0$ has multiple solutions.</p>

<h2>Example 3.7: Green's Function Existence</h2>
<p>For linear ODEs with boundary conditions.</p>

<h2>Example 3.8: Interval of Existence</h2>
<p>$y' = y^2$, $y(0) = 1$ exists until $y \to \infty$ at $x = 1$.</p>

<h2>Example 3.9: Global Existence</h2>
<p>$y' = \sin y$ exists for all $x$ (global solution).</p>

<h2>Example 3.10: Finite Time Blow-up</h2>
<p>$y' = y^2$, $y(0) = 1$ blows up at $x = 1$.</p>

<h2>Example 3.11: Stable Manifold</h2>
<p>Solutions near equilibrium point $y = 0$ for $y' = -y$.</p>

<h2>Example 3.12: Unstable Manifold</h2>
<p>Solutions near equilibrium $y = 0$ for $y' = y$.</p>

<h2>Example 3.13: Center</h2>
<p>$y' = -x$, $x' = y$ has centers (circles).</p>

<h2>Example 3.14: Spiral Source</h2>
<p>$x' = x + y$, $y' = -x + y$ spirals outward.</p>

<h2>Example 3.15: Spiral Sink</h2>
<p>$x' = -x - y$, $y' = x - y$ spirals inward.</p>

<h2>Example 3.16: Saddle Point</h2>
<p>$x' = x$, $y' = -y$ has saddle behavior.</p>

<h2>Example 3.17: Node (Sink)</h2>
<p>$x' = -x$, $y' = -2y$ approaches origin.</p>

<h2>Example 3.18: Node (Source)</h2>
<p>$x' = x$, $y' = 2y$ moves away from origin.</p>

<h2>Example 3.19: Degenerate Node</h2>
<p>$x' = -x$, $y' = -x - y$ unusual approach behavior.</p>

<h2>Example 3.20: Higher Order ODE as System</h2>
<p>$y'' + y = 0$ becomes $y_1' = y_2$, $y_2' = -y_1$.</p>`
                }
            ],
            exercises: [
                { question: "What is the order of: y''' + 2y' + y = sin(x)?", answer: "Third order" },
                { question: "Is y' = y² linear?", answer: "No, it's nonlinear" },
                { question: "Solution of y' = 2x?", answer: "y = x² + C" },
                { question: "Is y'' + y = 0 homogeneous?", answer: "Yes" },
                { question: "Is y'' + y = x linear?", answer: "Yes, non-homogeneous" }
            ]
        },
        {
            id: 2,
            title: "First-Order: Separation",
            subtitle: "Separable and homogeneous equations",
            duration: "3 hours",
            week: "Week 2",
            sections: [
                {
                    title: "Separable Equations",
                    content: `<h2>Definition</h2>
<p>An ODE is <strong>separable</strong> if it can be written as: $\frac{dy}{dx} = g(x) \cdot h(y)$</p>

<h2>Solution Method</h2>
<ol>
<li>Separate: $\frac{1}{h(y)}dy = g(x)dx$</li>
<li>Integrate both sides</li>
</ol>

<h2>Example 1: Basic Separation</h2>
<p>Solve: $\frac{dy}{dx} = xy$</p>
<pre><code>dy/y = x dx
∫ dy/y = ∫ x dx
ln|y| = x²/2 + C
y = Ce^(x²/2)</code></pre>

<h2>Example 2: With Initial Condition</h2>
<p>Solve: $\frac{dy}{dx} = xy$, $y(0) = 2$</p>
<pre><code>ln|y| = x²/2 + C
At x=0, y=2: ln|2| = C
y = 2e^(x²/2)</code></pre>

<h2>Example 3: Separable Trigonometric</h2>
<p>$\frac{dy}{dx} = \sin x \cdot \cos y$</p>
<pre><code>dy/cos y = sin x dx
∫ sec y dy = ∫ sin x dx
ln|sec y + tan y| = -cos x + C</code></pre>

<h2>Example 4: Exponential</h2>
<p>$\frac{dy}{dx} = e^{x-y}$</p>
<pre><code>e^y dy = e^x dx
e^y = e^x + C
y = ln(e^x + C)</code></pre>

<h2>Example 5: Square Root</h2>
<p>$\frac{dy}{dx} = \sqrt{1-y^2}$</p>
<pre><code>dy/√(1-y²) = dx
arcsin y = x + C
y = sin(x + C)</code></pre>

<h2>Example 6: Rational Function</h2>
<p>$\frac{dy}{dx} = \frac{x}{y}$</p>
<pre><code>y dy = x dx
y²/2 = x²/2 + C
y² - x² = C</code></pre>

<h2>Example 7: Product of Functions</h2>
<p>$\frac{dy}{dx} = (x+1)(y-2)$</p>
<pre><code>dy/(y-2) = (x+1)dx
ln|y-2| = x²/2 + x + C
y = 2 + Ce^(x²/2 + x)</code></pre>

<h2>Example 8: Linear in Denominator</h2>
<p>$\frac{dy}{dx} = \frac{1+y^2}{1+x^2}$</p>
<pre><code>dy/(1+y²) = dx/(1+x²)
arctan y = arctan x + C
y = tan(arctan x + C)</code></pre>

<h2>Example 9: Newton's Law of Cooling</h2>
<p>$\frac{dT}{dt} = -k(T - T_{env})$, $T(0) = T_0$</p>
<pre><code>dT/(T-T_env) = -k dt
ln|T-T_env| = -kt + C
T(t) = T_env + (T_0 - T_env)e^(-kt)</code></pre>

<h2>Example 10: Population Growth</h2>
<p>$\frac{dP}{dt} = rP$, $P(0) = P_0$</p>
<pre><code>dP/P = r dt
ln P = rt + C
P(t) = P_0 e^(rt)</code></pre>

<h2>Example 11: Radioactive Decay</h2>
<p>$\frac{dN}{dt} = -kN$, $N(0) = N_0$</p>
<pre><code>dN/N = -k dt
ln N = -kt + C
N(t) = N_0 e^(-kt)</code></pre>

<h2>Example 12: Logistic Growth</h2>
<p>$\frac{dP}{dt} = rP(1 - P/K)$</p>
<pre><code>dP/(P(1-P/K)) = r dt
∫(K/(P(K-P)))dP = rt + C
P = K/(1 + Ce^(-rt))</code></pre>

<h2>Example 13: Mixing Problem</h2>
<p>$\frac{dA}{dt} = 3 - \frac{A}{100}$</p>
<pre><code>dA/dt + A/100 = 3
Solution: A(t) = 300 - Ce^(-t/100)</code></pre>

<h2>Example 14: Falling Body</h2>
<p>$\frac{dv}{dt} = g - kv$, $v(0) = 0$</p>
<pre><code>v = g/k - (g/k)e^(-kt)</code></pre>

<h2>Example 15: Compound Interest</h2>
<p>$\frac{dA}{dt} = rA$, $A(0) = P$</p>
<pre><code>A(t) = Pe^(rt)</code></pre>

<h2>Example 16: Chemical Reaction</h2>
<p>$\frac{dC}{dt} = -kC^2$</p>
<pre><code>C(t) = 1/(kt + 1/C_0)</code></pre>

<h2>Example 17: Torricelli's Law</h2>
<p>$\frac{dh}{dt} = -k\sqrt{h}$</p>
<pre><code>h(t) = (√h_0 - kt/2)²</code></pre>

<h2>Example 18: Infection Spread</h2>
<p>$\frac{dI}{dt} = \beta I(S_0 - I)$</p>
<pre><code>I(t) = S_0/(1 + (S_0/I_0 - 1)e^(-βS_0t))</code></pre>

<h2>Example 19: Learning Curve</h2>
<p>$\frac{dL}{dt} = k(M - L)$</p>
<pre><code>L(t) = M - (M - L_0)e^(-kt)</code></pre>

<h2>Example 20: Series Circuit</h2>
<p>$\frac{dq}{dt} + \frac{R}{L}q = \frac{V}{L}$</p>
<pre><code>q(t) = V/R + Ce^(-Rt/L)</code></pre>`
                },
                {
                    title: "Homogeneous Equations",
                    content: `<h2>Definition</h2>
<p>An equation is <strong>homogeneous</strong> if $\frac{dy}{dx} = F(\frac{y}{x})$</p>

<h2>Method: Substitute v = y/x</h2>

<h2>Example 1: Basic Homogeneous</h2>
<p>Solve: $\frac{dy}{dx} = \frac{y}{x} + \frac{x}{y}$</p>
<pre><code>Let v = y/x
v + x dv/dx = v + 1/v
x dv/dx = 1/v
v dv = dx/x
v²/2 = ln|x| + C
y² = Cx² ln|x|</code></pre>

<h2>Example 2: Homogeneous with Square Root</h2>
<p>$\frac{dy}{dx} = \sqrt{\frac{y}{x}}$</p>
<pre><code>Let v = y/x
v + x dv/dx = √v
x dv/dx = √v - v
Separate and solve</code></pre>

<h2>Example 3: Alternative Form</h2>
<p>$(x^2 + y^2)dx - 2xy dy = 0$</p>
<pre><code>dy/dx = (x²+y²)/(2xy)
= (1 + (y/x)²)/(2(y/x))
Let v = y/x and solve</code></pre>

<h2>Example 4: Trigonometric Homogeneous</h2>
<p>$\frac{dy}{dx} = \frac{x\cos^2(y/x)}{y}$</p>

<h2>Example 5: After Simplification</h2>
<p>$(x^2 + xy + y^2)dx = x^2 dy$</p>

<h2>Example 6: Linear Homogeneous</h2>
<p>$\frac{dy}{dx} = \frac{2y}{x} + x$</p>

<h2>Example 7: With Substitution</h2>
<p>$\frac{dy}{dx} = \frac{y^2 + 2xy}{x^2}$</p>

<h2>Example 8: More Complex</h2>
<p>$\frac{dy}{dx} = \frac{y}{x} \ln(\frac{y}{x})$</p>

<h2>Example 9: Quadratic in y/x</h2>
<p>$\frac{dy}{dx} = (\frac{y}{x})^2 + \frac{y}{x}$</p>

<h2>Example 10: Trigonometric Substitution</h2>
<p>$\frac{dy}{dx} = \frac{y}{x} + \tan(\frac{y}{x})$</p>

<h2>Example 11: IVP Homogeneous</h2>
<p>$\frac{dy}{dx} = \frac{y}{x} + \sin(\frac{y}{x})$, $y(1) = 0$</p>

<h2>Example 12: Inverse Relationship</h2>
<p>$\frac{dy}{dx} = \frac{x}{y} + \frac{x^2}{y^2}$</p>

<h2>Example 13: Multiple Substitution</h2>
<p>$(y + \sqrt{xy})dx = x dy$</p>

<h2>Example 14: Square Root Form</h2>
<p>$\frac{dy}{dx} = \sqrt{\frac{x}{y}}$</p>

<h2>Example 15: With Linear Term</h2>
<p>$\frac{dy}{dx} = \frac{y}{x} + \frac{x}{y}$</p>

<h2>Example 16: Fractions</h2>
<p>$(x^2 - y^2)dx + 2xy dy = 0$</p>

<h2>Example 17: Third Type</h2>
<p>$x \frac{dy}{dx} = y + \sqrt{xy}$</p>

<h2>Example 18: With Constant</h2>
<p>$\frac{dy}{dx} = \frac{y}{x} + C$</p>

<h2>Example 19: Using Substitution u = y/x</h2>
<p>General homogeneous: $\frac{dy}{dx} = f(\frac{y}{x})$</p>

<h2>Example 20: Orthogonal Trajectories</h2>
<p>Find curves orthogonal to $y = Cx^2$: $x^2 + 2y^2 = K$</p>`
                }
            ],
            exercises: [
                { question: "Solve: dy/dx = xy", answer: "y = Ce^(x²/2)" },
                { question: "Solve: dy/dx = x/y", answer: "y² - x² = C" },
                { question: "Solve: dy/dx = y/x", answer: "y = Cx" },
                { question: "Solve: dy/dx = (x+y)/x", answer: "Use v = y/x" }
            ]
        },
        {
            id: 3,
            title: "First-Order: Exact & Linear",
            subtitle: "Exact equations and linear equations",
            duration: "3 hours",
            week: "Week 3",
            sections: [
                {
                    title: "Exact Differential Equations",
                    content: `<h2>Definition</h2>
<p>$M(x,y)dx + N(x,y)dy = 0$ is <strong>exact</strong> if $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$</p>

<h2>Example 1: Basic Exact</h2>
<p>Solve: $(2xy + y^2)dx + (x^2 + 2xy)dy = 0$</p>
<pre><code>M = 2xy + y², N = x² + 2xy
My = 2x + 2y, Nx = 2x + 2y (exact!)
ψ_x = M = 2xy + y²
ψ = x²y + xy² + h(y)
ψ_y = x² + 2xy + h'(y) = N
h'(y) = 0
Solution: x²y + xy² = C</code></pre>

<h2>Example 2: With Exponential</h2>
<p>$(e^x \sin y + 2x)dx + (e^x \cos y + 2y)dy = 0$</p>

<h2>Example 3: Polynomial</h2>
<p>$(3x^2y + y^3)dx + (x^3 + 3xy^2)dy = 0$</p>

<h2>Example 4: With Trigonometry</h2>
<p>$(\cos x - y \sin x)dx + (\cos y - x \sin y)dy = 0$</p>

<h2>Example 5: With Arctan</h2>
<p>$(y/(1+x^2) + \arctan x)dx + (\arctan y)dy = 0$</p>

<h2>Example 6: Mixed Terms</h2>
<p>$(xy^2 + x)dx + (x^2y + y)dy = 0$</p>

<h2>Example 7: Logarithmic</h2>
<p>$(y \ln y + x)dx + (x \ln x + y)dy = 0$</p>

<h2>Example 8: Fractional</h2>
<p>$(1 + y/x)dx + (1 - y^2/x)dy = 0$</p>

<h2>Example 9: With Sine-Cosine</h2>
<p>$(e^y \cos x)dx + (e^y \sin x - 1)dy = 0$</p>

<h2>Example 10: Homogeneous Exact</h2>
<p>$(x^2 + y^2)dx - 2xy dy = 0$</p>

<h2>Example 11: Polynomial Degree 3</h2>
<p>$(x^3 + xy^2)dx + (y^3 + x^2y)dy = 0$</p>

<h2>Example 12: With Division</h2>
<p>$(y/x + y^2)dx + (\ln x + 2xy)dy = 0$</p>

<h2>Example 13: Square Terms</h2>
<p>$(x + y^2)dx + (y + x^2)dy = 0$</p>

<h2>Example 14: Inverse Relationship</h2>
<p>$(x^2 + y^2 + 2x)dx + (2xy + 2y)dy = 0$</p>

<h2>Example 15: Cubic in x</h2>
<p>$(x^3 + y^2)dx + (2xy)dy = 0$</p>

<h2>Example 16: Complex Coefficient</h2>
<p>$(1 + \sin x \cos y)dx + (1 - \sin y \cos x)dy = 0$</p>

<h2>Example 17: With Product Rule</h2>
<p>$(x \cos y + y \cos x)dx + (x \cos x - y \sin y)dy = 0$</p>

<h2>Example 18: Alternative Form</h2>
<p>$(y e^{xy} + x e^{xy})dx + (x e^{xy})dy = 0$</p>

<h2>Example 19: Using Pattern</h2>
<p>$(x^2 \sin y + x)dx + (x^2 \cos y)dy = 0$</p>

<h2>Example 20: General Form</h2>
<p>$(f(x)g(y))dx + (F(x)G'(y))dy = 0$ when exact condition met</p>`
                },
                {
                    title: "Integrating Factors",
                    content: `<h2>When Equation is Not Exact</h2>

<p>If $\frac{M_y - N_x}{N}$ is function of $x$ only:</p>
$$\mu(x) = e^{\int \frac{M_y - N_x}{N} dx}$$

<p>If $\frac{N_x - M_y}{M}$ is function of $y$ only:</p>
$$\mu(y) = e^{\int \frac{N_x - M_y}{M} dy}$$

<h2>Example 1: μ(x)</h2>
<p>$(y - x^3)dx + x dy = 0$</p>
<pre><code>My = 1, Nx = 1 (already exact!)
Wait: My - Nx = 1 - 0 = 1
(Nx - My)/M = -1/(y - x³) no...
Actually: use (My - Nx)/N = 1/x
μ = e^(∫1/x dx) = x
Multiply: (xy - x^4)dx + x^2 dy = 0
Now exact! xy²/2 - x^5/5 = C</code></pre>

<h2>Example 2: μ(y)</h2>
<p>$(x + y^3)dx + x y^2 dy = 0$</p>

<h2>Example 3: Standard Case</h2>
<p>$(2xy^2 + y)dx + (x^2 y + x)dy = 0$</p>

<h2>Example 4: Try μ(x)</h2>
<p>$(y - x y^2)dx + x dy = 0$</p>

<h2>Example 5: Try μ(y)</h2>
<p>$(x^2 + xy)dx + x^2 dy = 0$</p>

<h2>Example 6: More Complex</h2>
<p>$(x^2 y + y^3)dx + (x^3 + x y^2)dy = 0$</p>

<h2>Example 7: After Division</h2>
<p>$(x + y^3)/x dx + dy = 0$</p>

<h2>Example 8: Finding Pattern</h2>
<p>General approach to find integrating factor</p>

<h2>Example 9: Linear in y</h2>
<p>Form: $y f(xy)dx + x g(xy)dy = 0$</p>

<h2>Example 10: Linear in x</h2>
<p>Form: $x f(xy)dx + y g(xy)dy = 0$</p>

<h2>Example 11: Quadratic</h2>
<p>$(x^2 + xy + y^2)dx = x dy$</p>

<h2>Example 12: Mixed</h2>
<p>$(xy^2 + x^2 y)dx + (x^3)dy = 0$</p>

<h2>Example 13: By Inspection</h2>
<p>Sometimes μ = 1/(x^m y^n) works</p>

<h2>Example 14: Using Technology</h2>
<p>Computer algebra can find integrating factors</p>

<h2>Example 15: No Simple Factor</h2>
<p>Some equations require more advanced methods</p>

<h2>Example 16-20: More Practice</h2>
<p>Various equations to practice finding integrating factors</p>`
                },
                {
                    title: "First-Order Linear Equations",
                    content: `<h2>Standard Form: y' + p(x)y = q(x)</h2>

<h2>Solution: Integrating Factor Method</h2>
<p>$\mu(x) = e^{\int p(x)dx}$, then $\frac{d}{dx}(\mu y) = \mu q$</p>

<h2>Example 1: Basic Linear</h2>
<p>Solve: $y' + 2y = 4$</p>
<pre><code>μ = e^(∫2 dx) = e^(2x)
d/dx(e^(2x)y) = 4e^(2x)
e^(2x)y = 2e^(2x) + C
y = 2 + Ce^(-2x)</code></pre>

<h2>Example 2: Variable p(x)</h2>
<p>$y' + \frac{1}{x}y = x$</p>
<pre><code>μ = e^(∫1/x dx) = x
d/dx(xy) = x²
xy = x³/3 + C
y = x²/3 + C/x</code></pre>

<h2>Example 3: With Initial Condition</h2>
<p>$y' + y \cot x = \sin 2x$, $y(\pi/2) = 1$</p>
<pre><code>μ = sin x
d/dx(y sin x) = 2 sin² x cos x
y sin x = 2∫sin²x cos x dx = 2∫u² du = 2u³/3 = 2sin³x/3 + C
y = 2sin²x/3 + C/sin x
y(π/2)=1 → C = 1/3
y = (2sin²x + csc x)/3</code></pre>

<h2>Example 4: Exponential p(x)</h2>
<p>$y' - 3y = e^{2x}$</p>
<pre><code>μ = e^(-3x)
d/dx(e^(-3x)y) = e^(-x)
e^(-3x)y = -e^(-x) + C
y = -e^(2x) + Ce^(3x)</code></pre>

<h2>Example 5: Rational q(x)</h2>
<p>$y' + \frac{2}{x}y = \frac{1}{x^2}$</p>
<pre><code>μ = x²
d/dx(x²y) = 1
x²y = x + C
y = 1/x + C/x²</code></pre>

<h2>Example 6: Multiple Terms</h2>
<p>$y' + y = \sin x$</p>
<pre><code>μ = e^x
d/dx(e^x y) = e^x sin x
e^x y = (e^x/2)(sin x - cos x) + C
y = (sin x - cos x)/2 + Ce^(-x)</code></pre>

