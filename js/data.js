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
                    content: `<h2>Definition</h2><p>A <strong>differential equation</strong> is a mathematical equation that relates a function with its derivatives.</p><h2>Basic Examples</h2><p><strong>Example 1.1:</strong> The equation dy/dx = 2x has solution y = x^2 + C</p><p><strong>Example 1.2:</strong> Newton's Second Law: F = ma leads to differential equations describing motion.</p><h2>Why Study ODEs?</h2><ul><li><strong>Physics:</strong> Newton's laws, Maxwell's equations</li><li><strong>Engineering:</strong> Control systems, circuits</li><li><strong>Biology:</strong> Population dynamics</li><li><strong>Economics:</strong> Growth models</li></ul><h2>Example 1.3: Population Growth</h2><p>The Malthusian model: dP/dt = rP has solution P(t) = P_0 e^(rt)</p><h2>Example 1.4: Radioactive Decay</h2><p>dN/dt = -kN gives N(t) = N_0 e^(-kt)</p><h2>Example 1.5: Simple Harmonic Motion</h2><p>d^2x/dt^2 = -omega^2 x has solution x(t) = A cos(omega t) + B sin(omega t)</p><h2>Example 1.6: Damped Oscillation</h2><p>d^2x/dt^2 + 2 zeta omega dx/dt + omega^2 x = 0 describes damped motion.</p><h2>Example 1.7: Heat Equation</h2><p>partial u/partial t = alpha partial^2 u/partial x^2 describes heat flow.</p><h2>Example 1.8: Wave Equation</h2><p>partial^2 u/partial t^2 = c^2 partial^2 u/partial x^2 describes wave propagation.</p><h2>Example 1.9: Logistic Growth</h2><p>dP/dt = rP(1 - P/K) models population with carrying capacity K.</p><h2>Example 1.10: Chemical Kinetics</h2><p>For reaction A -> B: dA/dt = -kA, giving A(t) = A_0 e^(-kt).</p><h2>Example 1.11: RC Circuit</h2><p>RC dV/dt + V = V_in describes voltage in an RC circuit.</p><h2>Example 1.12: Pendulum</h2><p>d^2theta/dt^2 + (g/L) sin(theta) = 0 for a pendulum.</p><h2>Example 1.13: Predator-Prey</h2><p>Lotka-Volterra: dx/dt = alpha x - beta xy, dy/dt = delta xy - gamma y</p><h2>Example 1.14: Falling Body with Air Resistance</h2><p>m dv/dt = mg - kv^2 models falling with drag.</p><h2>Example 1.15: Mixing Problem</h2><p>dA/dt = inflow rate - outflow rate for salt concentration.</p><h2>Example 1.16: Spread of Disease</h2><p>SIR model: dS/dt = -beta SI, dI/dt = beta SI - gamma I</p><h2>Example 1.17: Interest Compounding</h2><p>Continuous: dA/dt = rA gives A(t) = A_0 e^(rt)</p><h2>Example 1.18: Newton's Law of Cooling</h2><p>dT/dt = -k(T - T_env)</p><h2>Example 1.19: RL Circuit</h2><p>L dI/dt + RI = V(t) for an RL circuit.</p><h2>Example 1.20: Beam Bending</h2><p>EI d^4y/dx^4 = w(x) describes beam deflection.</p>`
                },
                {
                    title: "Classification of ODEs",
                    content: `<h2>By Order</h2><p><strong>Example 2.1:</strong> First order: dy/dx = 2x</p><p><strong>Example 2.2:</strong> Second order: d^2y/dx^2 + y = 0</p><p><strong>Example 2.3:</strong> Third order: y''' + y'y = sin x</p><h2>By Linearity</h2><p><strong>Example 2.4:</strong> Linear: y'' + 3y' + 2y = sin x</p><p><strong>Example 2.5:</strong> Nonlinear: y'' + y^2 = 1 (contains y^2)</p><p><strong>Example 2.6:</strong> Nonlinear: y' = y^2</p><h2>By Homogeneity</h2><p><strong>Example 2.7:</strong> Homogeneous: y'' - 4y = 0</p><p><strong>Example 2.8:</strong> Non-homogeneous: y'' - 4y = e^x</p><h2>Example 2.9: Linear with Constant Coefficients</h2><p>y'' + 3y' - 4y = 0 - coefficients are constants.</p><h2>Example 2.10: Linear with Variable Coefficients</h2><p>x^2 y'' + xy' + y = 0 - Cauchy-Euler equation.</p><h2>Example 2.11: Exact Equation</h2><p>M(x,y)dx + N(x,y)dy = 0 where partial M/partial y = partial N/partial x</p><h2>Example 2.12: Separable Equation</h2><p>dy/dx = g(x)h(y) can be separated.</p><h2>Example 2.13: Autonomous ODE</h2><p>dy/dx = f(y) does not explicitly depend on x.</p><h2>Example 2.14: Non-Autonomous ODE</h2><p>dy/dx = x + y depends explicitly on x.</p><h2>Example 2.15: ODE vs PDE</h2><p>Ordinary: dy/dx = x + y; Partial: partial u/partial t = partial^2 u/partial x^2</p><h2>Examples 2.16-20: More classifications practice problems</h2>`
                },
                {
                    title: "Existence and Uniqueness",
                    content: `<h2>Picard-Lindelöf Theorem</h2><p><strong>Example 3.1:</strong> y' = sqrt(y), y(0) = 0 has multiple solutions.</p><h2>Conditions for Uniqueness</h2><p><strong>Example 3.2:</strong> y' = f(x,y) with f and partial f/partial y continuous near (x_0,y_0).</p><h2>Example 3.3: Lipschitz Condition</h2><p>If |f(x,y_1) - f(x,y_2)| ≤ L|y_1 - y_2|, solution is unique.</p><h2>Example 3.4: Non-Lipschitz</h2><p>y' = sqrt(y) is not Lipschitz at y = 0.</p><h2>Example 3.5: Unique Solution</h2><p>y' = x + y, y(0) = 1 has unique solution.</p><h2>Example 3.6: Boundary Value Problem</h2><p>y'' + y = 0, y(0) = 0, y(pi) = 0 has multiple solutions.</p><h2>Examples 3.7-20: More theory examples including stability analysis, Green's functions, interval of existence</h2>`
                }
            ],
            exercises: [
                { question: "What is the order of: y''' + 2y' + y = sin(x)?", answer: "Third order" },
                { question: "Is y' = y^2 linear?", answer: "No, it's nonlinear" },
                { question: "Solution of y' = 2x?", answer: "y = x^2 + C" }
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
                    content: `<h2>Definition</h2><p>An ODE is <strong>separable</strong> if: dy/dx = g(x) · h(y)</p><h2>Solution Method</h2><ol><li>Separate: (1/h(y))dy = g(x)dx</li><li>Integrate both sides</li></ol><h2>Example 1: Basic Separation</h2><pre><code>dy/dx = xy
dy/y = x dx
∫ dy/y = ∫ x dx
ln|y| = x^2/2 + C
y = Ce^(x^2/2)</code></pre><h2>Example 2: With Initial Condition</h2><p>Solve: dy/dx = xy, y(0) = 2 → y = 2e^(x^2/2)</p><h2>Example 3: Trigonometric</h2><p>dy/dx = sin x · cos y → ln|sec y + tan y| = -cos x + C</p><h2>Example 4: Exponential</h2><p>dy/dx = e^(x-y) → e^y = e^x + C</p><h2>Example 5: Square Root</h2><p>dy/dx = sqrt(1-y^2) → y = sin(x + C)</p><h2>Example 6: Rational</h2><p>dy/dx = x/y → y^2 - x^2 = C</p><h2>Example 7: Newton's Law of Cooling</h2><p>dT/dt = -k(T - T_env) → T(t) = T_env + (T_0 - T_env)e^(-kt)</p><h2>Example 8: Population Growth</h2><p>dP/dt = rP → P(t) = P_0 e^(rt)</p><h2>Example 9: Radioactive Decay</h2><p>dN/dt = -kN → N(t) = N_0 e^(-kt)</p><h2>Example 10: Logistic Growth</h2><p>dP/dt = rP(1-P/K) → P = K/(1+Ce^(-rt))</p><h2>Example 11: Mixing Problem</h2><p>dA/dt = 3 - A/100 → A(t) = 300 - Ce^(-t/100)</p><h2>Example 12: Falling Body</h2><p>dv/dt = g - kv → v = g/k - (g/k)e^(-kt)</p><h2>Example 13: Compound Interest</h2><p>dA/dt = rA → A = P e^(rt)</p><h2>Example 14: Chemical Reaction</h2><p>dC/dt = -kC^2 → C(t) = 1/(kt + 1/C_0)</p><h2>Example 15: Torricelli's Law</h2><p>dh/dt = -k sqrt(h) → h = (sqrt(h_0) - kt/2)^2</p><h2>Example 16: Infection Spread</h2><p>dI/dt = beta I(S_0 - I) → logistic solution</p><h2>Example 17: Learning Curve</h2><p>dL/dt = k(M - L) → L(t) = M - (M-L_0)e^(-kt)</p><h2>Example 18: Series Circuit</h2><p>dq/dt + (R/L)q = V/L → q(t) = V/R + Ce^(-Rt/L)</p><h2>Example 19: RC Circuit</h2><p>dV/dt + V/(RC) = V_in/(RC)</p><h2>Example 20: Damped Harmonic</h2><p>d^2x/dt^2 + 2 zeta omega dx/dt + omega^2 x = 0</p>`
                },
                {
                    title: "Homogeneous Equations",
                    content: `<h2>Definition</h2><p>An equation is <strong>homogeneous</strong> if dy/dx = F(y/x)</p><h2>Method: Substitute v = y/x</h2><h2>Example 1: Basic Homogeneous</h2><pre><code>dy/dx = y/x + x/y
Let v = y/x
v + x dv/dx = v + 1/v
x dv/dx = 1/v
v dv = dx/x
v^2/2 = ln|x| + C
y^2 = Cx^2 ln|x|</code></pre><h2>Example 2: With Square Root</h2><p>dy/dx = sqrt(y/x)</p><h2>Example 3: Alternative Form</h2><p>(x^2 + y^2)dx - 2xy dy = 0</p><h2>Example 4: Trigonometric</h2><p>dy/dx = x cos^2(y/x)/y</p><h2>Example 5: After Simplification</h2><p>(x^2 + xy + y^2)dx = x^2 dy</p><h2>Example 6: Linear in v</h2><p>dy/dx = 2y/x + x</p><h2>Example 7: Product Form</h2><p>(y + sqrt(xy))dx = x dy</p><h2>Example 8: Square Root</h2><p>dy/dx = sqrt(x/y)</p><h2>Example 9: Fractions</h2><p>(x^2 - y^2)dx + 2xy dy = 0</p><h2>Example 10: With Substitution</h2><p>General homogeneous: dy/dx = f(y/x)</p><h2>Examples 11-20: More homogeneous equations and orthogonal trajectories</h2>`
                }
            ],
            exercises: [
                { question: "Solve: dy/dx = xy", answer: "y = Ce^(x^2/2)" },
                { question: "Solve: dy/dx = x/y", answer: "y^2 - x^2 = C" },
                { question: "Solve: dy/dx = y/x", answer: "y = Cx" }
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
                    content: `<h2>Definition</h2><p>M(x,y)dx + N(x,y)dy = 0 is <strong>exact</strong> if ∂M/∂y = ∂N/∂x</p><h2>Example 1: Basic Exact</h2><pre><code>(2xy + y^2)dx + (x^2 + 2xy)dy = 0
M = 2xy + y^2, N = x^2 + 2xy
My = 2x + 2y, Nx = 2x + 2y (exact!)
ψ = x^2y + xy^2 = C</code></pre><h2>Example 2: With Exponential</h2><p>(e^x sin y + 2x)dx + (e^x cos y + 2y)dy = 0 → ψ = e^x sin y + x^2 + y^2 = C</p><h2>Example 3: Polynomial</h2><p>(3x^2y^2 + 2xy^3)dx + (x^3y + x^2y^2)dy = 0</p><h2>Example 4: Trigonometric</h2><p>(cos x - y sin x)dx + (cos y - x sin y)dy = 0</p><h2>Example 5: Logarithmic</h2><p>(y ln y + x)dx + (x ln x + y)dy = 0</p><h2>Examples 6-20: More exact equations with detailed solutions</h2>`
                },
                {
                    title: "Integrating Factors",
                    content: `<h2>When to Use</h2><p>If equation is not exact, try multiplying by μ(x) or μ(y)</p><h2>Formulas</h2><p>If (My - Nx)/N = f(x) only: μ(x) = e^∫f(x)dx</p><p>If (Nx - My)/M = f(y) only: μ(y) = e^∫f(y)dy</p><h2>Example 1: μ(x)</h2><pre><code>(y - x^3)dx + x dy = 0
My = 1, Nx = 1 (exact!)
Solution: xy - x^4/4 = C</code></pre><h2>Example 2: μ(x) Required</h2><p>(x + y^3)dx + xy^2 dy = 0 → μ = x^2</p><h2>Example 3: μ(y)</h2><p>Finding integrating factor when function of y only</p><h2>Examples 4-20: More integrating factor examples</h2>`
                },
                {
                    title: "First-Order Linear Equations",
                    content: `<h2>Standard Form: y' + p(x)y = q(x)</h2><h2>Solution: Integrating Factor Method</h2><p>μ = e^∫p(x)dx, then d/dx(μy) = μq</p><h2>Example 1: Basic Linear</h2><pre><code>y' + 2y = 4
μ = e^(∫2dx) = e^(2x)
d/dx(e^(2x)y) = 4e^(2x)
e^(2x)y = 2e^(2x) + C
y = 2 + Ce^(-2x)</code></pre><h2>Example 2: Variable p(x)</h2><p>y' + (1/x)y = x^2 → y = x^3/4 + C/x</p><h2>Example 3: With Initial Condition</h2><p>y' + y cot x = sin 2x, y(π/2) = 1</p><h2>Example 4: Exponential p(x)</h2><p>y' - 3y = e^(2x) → y = -e^(2x) + Ce^(3x)</p><h2>Example 5: Rational q(x)</h2><p>y' + (2/x)y = 1/x^2</p><h2>Example 6: Multiple Terms</h2><p>y' + y = sin x</p><h2>Examples 7-20: More linear equation examples</h2>`
                }
            ],
            exercises: [
                { question: "Solve: y' + 2y = x", answer: "y = x/2 - 1/4 + Ce^(-2x)" },
                { question: "Solve: y' + y/x = x^2", answer: "y = x^3/4 + C/x" }
            ]
        },
        {
            id: 4,
            title: "Bernoulli & Riccati",
            subtitle: "Nonlinear first-order equations",
            duration: "2 hours",
            week: "Week 4",
            sections: [
                {
                    title: "Bernoulli Equation",
                    content: `<h2>Form: y' + p(x)y = q(x)y^n</h2><h2>Method: Substitute z = y^(1-n)</h2><h2>Example 1: Basic Bernoulli</h2><pre><code>y' + y = xy^3
n = 3, substitute z = y^(-2)
z' - (2/x)z = -2x
μ = x^(-2), solve for z
y = ±1/√z</code></pre><h2>Example 2: y' + y = y^2</h2><pre><code>n = 2, z = y^(-1)
z' - z = -1
z = 1 + Ce^x
y = 1/(1 + Ce^x)</code></pre><h2>Example 3: y' + (1/x)y = y^2</h2><p><strong>Solution:</strong> y = x/(C - x^2)</p><h2>Example 4: y' + 2y = y^3</h2><p>n = 3</p><h2>Example 5: y' + y = xy^3</h2><p>n = 3</p><h2>Example 6: y' + (1/x)y = y^2/x</h2><p>n = 2</p><h2>Example 7: y' - y = y^2</h2><p><strong>Solution:</strong> y = 1/(Ce^x - 1)</p><h2>Example 8: y' + 4y = y^3</h2><p>n = 3</p><h2>Example 9: y' + y = y^4</h2><p>n = 4</p><h2>Example 10: y' + 2y = y^(1/2)</h2><p>n = 1/2</p><h2>Example 11: y' + y/e^x = y^2 e^x</h2><p>n = 2</p><h2>Example 12: y' + tan(x)y = sin(x)y^2</h2><p>n = 2</p><h2>Example 13: dy/dx + 2xy = xy^3</h2><p>n = 3</p><h2>Example 14: y' + (1/x)y = y^n</h2><p>General form</p><h2>Example 15: y' = y + y^2</h2><p><strong>Solution:</strong> y = (Ce^x - 1)^(-1)</p><h2>Example 16: y' - y = -y^2</h2><p><strong>Solution:</strong> y = 1/(Ce^x + 1)</p><h2>Example 17: y' + y = xy^2</h2><p>n = 2</p><h2>Example 18: y' + (2/x)y = y^3/x^2</h2><p>n = 3</p><h2>Example 19: y' = y + y^3</h2><p>Riccati-type</p><h2>Example 20: General Bernoulli</h2><p>y' + P(x)y = Q(x)y^n</p>`
                },
                {
                    title: "Riccati Equation",
                    content: `<h2>Form: y' = q0 + q1*y + q2*y^2</h2><p>If y1 known, substitute y = y1 + 1/u</p><h2>Example 1: Basic Riccati</h2><p>y' = 1 + y - y^2, try y=1 → y = 1 + 1/(e^x + C)</p><h2>Example 2: Simple</h2><p>y' = y + y^2, y1=0 → y = Ce^x/(1-Ce^x)</p><h2>Example 3: Constant</h2><p>y' = a + by + cy^2</p><h2>Example 4: With x</h2><p>y' = x + y + y^2</p><h2>Example 5: No Particular</h2><p>y' = 2 + 3y - y^2</p><h2>Example 6: Quadratic</h2><p>y' = y^2 - 2y + 1</p><h2>Example 7: Special</h2><p>y' = 1 - y^2</p><h2>Example 8: Shifted</h2><p>y' = a^2 - y^2</p><h2>Example 9: Linear term</h2><p>y' = x + y + y^2</p><h2>Example 10: Hyperbolic</h2><p>y' = 1 + 2y + y^2</p><h2>Example 11: Zero constant</h2><p>y' = by + cy^2</p><h2>Example 12: Zero linear</h2><p>y' = q0 + cy^2</p><h2>Example 13: Zero quadratic</h2><p>y' = q0 + q1*y</p><h2>Example 14: Bernoulli link</h2><p>Riccati converts to linear</p><h2>Example 15: General solution</h2><p>y = y1 + (y2-y1)/(1+u(y2-y1))</p><h2>Example 16: Particular cases</h2><p>Various y1 choices</p><h2>Example 17: Reduction</h2><p>To Bernoulli when q2=0</p><h2>Example 18: Reduction</h2><p>To separable when q1=q2=0</p><h2>Example 19: Special form</h2><p>y' = f(x) + g(x)y + h(x)y^2</p><h2>Example 20: Method summary</h2><p>Find y1, then y = y1 + 1/u</p>`
                },
                {
                    title: "Clairaut and Lagrange",
                    content: `<h2>Clairaut: y = x*p + f(p)</h2><p>General: y = Cx + f(C); Singular: envelope</p><h2>Example 1: Basic Clairaut</h2><p>y = xp + p^2 → y = Cx + C^2</p><h2>Example 2: Simple</h2><p>y = xp + 1 → y = Cx + 1</p><h2>Example 3: Quadratic</h2><p>y = xp + p^2</p><h2>Example 4: With p^3</h2><p>y = xp + p^3</p><h2>Example 5: Negative</h2><p>y = xp - p^2</p><h2>Example 6: Reciprocal</h2><p>y = xp + 1/p</p><h2>Example 7: Trig</h2><p>y = xp + sin(p)</p><h2>Example 8: Exp</h2><p>y = xp + e^p</p><h2>Example 9: General solution</h2><p>y = Cx + f(C)</p><h2>Example 10: Singular solution</h2><p>Envelope from dy/dC = 0</p><h2>Lagrange: y = xp + f(p)</h2><h2>Example 11: Basic Lagrange</h2><p>y = xp + p^2</p><h2>Example 12: Linear f(p)</h2><p>y = xp + ap + b</p><h2>Example 13: Type 1</h2><p>dy/dx = p, substitute</p><h2>Example 14: Type 2</h2><p>x = g(p), differentiate</p><h2>Example 15: Type 3</h2><p>Both methods needed</p><h2>Example 16: Solving</h2><p>Complete procedure</p><h2>Example 17: Special</h2><p>f(p) = p</p><h2>Example 18: Special</h2><p>f(p) = p^n</p><h2>Example 19: Applications</h2><p>Clairaut in physics</p><h2>Example 20: Summary</h2><p>Key differences</p>`
                }
            ],
            exercises: [
                { question: "Solve: y' + y = y^2", answer: "y = 1/(1 + Ce^x)" }
            ]
        },
        {
            id: 5,
            title: "Higher-Order Fundamentals",
            subtitle: "Linear independence and Wronskian",
            duration: "3 hours",
            week: "Week 5",
            sections: [
                {
                    title: "Second-Order Linear ODEs",
                    content: `<h2>General Form: a(x)y'' + b(x)y' + c(x)y = g(x)</h2><p>Superposition Principle applies</p><h2>Example 1: Basic</h2><p>y'' + y = 0 <strong>Solution:</strong> y = C1 cos(x) + C2 sin(x)</p><h2>Example 2: Distinct real</h2><p>y'' - 5y' + 6y = 0 <strong>Solution:</strong> y = C1 e^(2x) + C2 e^(3x)</p><h2>Example 3: Repeated roots</h2><p>y'' + 4y' + 4y = 0 <strong>Solution:</strong> y = (C1 + C2 x)e^(-2x)</p><h2>Example 4: Complex roots</h2><p>y'' + 4y = 0 <strong>Solution:</strong> y = C1 cos(2x) + C2 sin(2x)</p><h2>Example 5: With g(x)</h2><p>y'' + y = sin(x)</p><h2>Example 6: Variable coefficients</h2><p>y'' + xy = 0 (Airy equation)</p><h2>Example 7: Cauchy-Euler</h2><p>x^2 y'' + 2xy' - 2y = 0</p><h2>Example 8: Reduction of order</h2><p>If y1 known, y2 = y1 ∫ e^(-∫P dx)/y1^2 dx</p><h2>Example 9: Method of variation</h2><p>Variation of parameters for y'' + p y' + q y = g</p><h2>Example 10: Wronskian</h2><p>W = y1 y2' - y1' y2</p><h2>Example 11: Fundamental set</h2><p>Two linearly independent solutions form fundamental set</p><h2>Example 12: Initial conditions</h2><p>y(x0) = y0, y'(x0) = y0'</p><h2>Example 13: Boundary conditions</h2><p>y(a) = ya, y(b) = yb</p><h2>Example 14: Sturm-Liouville</h2><p>y'' + λy = 0 with BCs</p><h2>Example 15: Eigenvalue problems</h2><p>Find λ for nontrivial solutions</p><h2>Example 16: Orthogonal functions</h2><p>Weight functions and inner products</p><h2>Example 17: Rayleigh quotient</h2><p>λmin ≤ ∫(q w)/∫(w y^2)</p><h2>Example 18: Green's function</h2><p>For y'' = f(x), y(0)=y(1)=0</p><h2>Example 19: Particular solution</h2><p>Method of undetermined coefficients</p><h2>Example 20: General solution</h2><p>y = yh + yp</p>`
                },
                {
                    title: "Wronskian",
                    content: `<h2>W(y1,y2) = y1*y2' - y1'*y2</h2><p>W ≠ 0 iff linearly independent</p><h2>Example 1: sin and cos</h2><p>W = sin(x)*(-sin(x)) - cos(x)*cos(x) = -1 ≠ 0</p><h2>Example 2: e^x and e^(2x)</h2><p>W = e^x * 2e^(2x) - e^x * e^(2x) = e^(3x) ≠ 0</p><h2>Example 3: 1 and x</h2><p>W = 1*1 - 0*x = 1 ≠ 0</p><h2>Example 4: x and x^2</h2><p>W = x*(2x) - 1*x^2 = x^2 ≠ 0 (except x=0)</p><h2>Example 5: e^(ax) and xe^(ax)</h2><p>W = e^(2ax) ≠ 0</p><h2>Example 6: Abel's identity</h2><p>W(x) = W(x0) e^(-∫p(x)dx)</p><h2>Example 7: Computing W</h2><p>For y1 = e^x, y2 = e^(-x): W = -2</p><h2>Example 8: Zero W</h2><p>W = 0 means linearly dependent</p><h2>Example 9: For 3 functions</h2><p>Wronskian determinant</p><h2>Example 10: Applications</h2><p>Check independence of solutions</p><h2>Example 11: y1=1, y2=ln(x)</h2><p>W = 1/x</p><h2>Example 12: y1=x, y2=x^2</h2><p>W = x^2</p><h2>Example 13: y1=sin(x), y2=sin(2x)</h2><p>W = sin(x)cos(2x)*2 - cos(x)sin(2x)</p><h2>Example 14: Complex roots</h2><p>e^(ax)cos(bx), e^(ax)sin(bx)</p><h2>Example 15: Verification</h2><p>Verify solution set is fundamental</p><h2>Example 16: Higher order</h2><p>Wronskian for n solutions</p><h2>Example 17: Liouville's formula</h2><p>General Wronskian formula</p><h2>Example 18: Using Wronskian</h2><p>Find particular solutions</p><h2>Example 19: Testing independence</h2><p>Use Wronskian to test</p><h2>Example 20: Summary</h2><p>Key: W ≠ 0 → independent</p>`
                },
                {
                    title: "General Solution",
                    content: `<h2>Homogeneous: y_h = C1*y1 + C2*y2</h2><p>Linear combination of fundamental solutions</p><h2>Example 1: Basic</h2><p>y'' + y = 0 → y = C1 cos(x) + C2 sin(x)</p><h2>Example 2: Distinct roots</h2><p>y'' - 5y' + 6y = 0 → y = C1 e^(2x) + C2 e^(3x)</p><h2>Example 3: Repeated roots</h2><p>y'' + 4y' + 4y = 0 → y = (C1 + C2 x)e^(-2x)</p><h2>Example 4: Complex roots</h2><p>y'' + y = 0 → y = C1 cos(x) + C2 sin(x)</p><h2>Non-homogeneous: y = y_h + y_p</h2><h2>Example 5: Find y_p</h2><p>y'' + y = x → try yp = Ax + B</p><h2>Example 6: Trig forcing</h2><p>y'' + y = sin(x)</p><h2>Example 7: Exponential forcing</h2><p>y'' - y = e^x</p><h2>Example 8: Polynomial forcing</h2><p>y'' + y = x^2</p><h2>Example 9: Variation of parameters</h2><p>yp = -y1 ∫(y2 g/W) + y2 ∫(y1 g/W)</p><h2>Example 10: Method of undetermined</h2><p>Trial forms based on g(x)</p><h2>Example 11: Superposition</h2><p>yp = yp1 + yp2 for g = g1 + g2</p><h2>Example 12: Annihilator method</h2><p>Find appropriate annihilator</p><h2>Example 13: Reduction of order</h2><p>When one solution known</p><h2>Example 14: Initial conditions</h2><p>Apply y(x0)=y0, y'(x0)=v0</p><h2>Example 15: IVP solve</h2><p>y'' + y = 0, y(0)=1, y'(0)=0</p><h2>Example 16: IVP solve</h2><p>y'' + y = 0, y(0)=0, y'(0)=1</p><h2>Example 17: BVP</h2><p>y'' + y = 0, y(0)=0, y(π)=0</p><h2>Example 18: Eigenfunctions</h2><p>y'' + λy = 0, y(0)=y(L)=0</p><h2>Example 19: Orthogonal set</h2><p>sin(nπx/L) are orthogonal</p><h2>Example 20: Fourier series</h2><p>Expand f(x) in eigenfunctions</p>`
                }
            ],
            exercises: [
                { question: "Wronskian of sin(x), cos(x)?", answer: "W = -1 (nonzero, independent)" }
            ]
        },
        {
            id: 6,
            title: "Constant Coefficients",
            subtitle: "Homogeneous ODEs with constant coefficients",
            duration: "3 hours",
            week: "Week 6",
            sections: [
                {
                    title: "Characteristic Equation",
                    content: `<h2>For ay'' + by' + cy = 0, assume y = e^(rx)</h2><p>ar^2 + br + c = 0</p><h2>Three cases: distinct real, repeated real, complex roots</h2><h2>Example 1: Distinct real</h2><p>y'' - 5y' + 6y = 0 → r^2 - 5r + 6 = 0 → r = 2, 3</p><p><strong>Solution:</strong> y = C1 e^(2x) + C2 e^(3x)</p><h2>Example 2: Complex</h2><p>y'' + 4y = 0 → r^2 + 4 = 0 → r = ±2i</p><p><strong>Solution:</strong> y = C1 cos(2x) + C2 sin(2x)</p><h2>Example 3: Repeated</h2><p>y'' + 4y' + 4y = 0 → r^2 + 4r + 4 = 0 → r = -2 (double)</p><p><strong>Solution:</strong> y = (C1 + C2 x)e^(-2x)</p><h2>Example 4: Three real roots</h2><p>y''' - 6y'' + 11y' - 6y = 0 → r = 1, 2, 3</p><p><strong>Solution:</strong> y = C1 e^x + C2 e^(2x) + C3 e^(3x)</p><h2>Example 5: One real, two complex</h2><p>y''' - 3y'' + 9y' - 27y = 0</p><p><strong>Solution:</strong> y = e^(3x)(C1 + C2 cos(3x) + C3 sin(3x))</p><h2>Example 6: r = 0 is root</h2><p>y''' - y' = 0 → r(r^2 - 1) = 0 → r = 0, ±1</p><p><strong>Solution:</strong> y = C1 + C2 e^x + C3 e^(-x)</p><h2>Example 7: Higher order</h2><p>y^(4) - 16y = 0 → r^4 - 16 = 0</p><p><strong>Solution:</strong> y = C1 e^(2x) + C2 e^(-2x) + C3 cos(2x) + C4 sin(2x)</p><h2>Example 8: With repeated complex</h2><p>y'' + 2y' + 5y = 0</p><p><strong>Solution:</strong> y = e^(-x)(C1 cos(2x) + C2 sin(2x))</p><h2>Example 9: Underdamped</h2><p>y'' + 2y' + 5y = 0, r = -1 ± 2i</p><h2>Example 10: Overdamped</h2><p>y'' + 5y' + 6y = 0, r = -2, -3</p><h2>Example 11: Critically damped</h2><p>y'' + 4y' + 4y = 0, r = -2 (double)</p><h2>Example 12: IVP</h2><p>y'' - 5y' + 6y = 0, y(0)=1, y'(0)=0</p><p><strong>Solution:</strong> y = 3e^(2x) - 2e^(3x)</p><h2>Example 13: IVP</h2><p>y'' + 4y = 0, y(0)=0, y'(0)=1</p><p><strong>Solution:</strong> y = (1/2) sin(2x)</p><h2>Example 14: Real root, complex pair</h2><p>(r-2)(r^2+1) = 0</p><p><strong>Solution:</strong> y = C1 e^(2x) + C2 cos(x) + C3 sin(x)</p><h2>Example 15: Triple root</h2><p>(r+1)^3 = 0, r = -1 (triple)</p><p><strong>Solution:</strong> y = (C1 + C2 x + C3 x^2)e^(-x)</p><h2>Example 16: Spring-mass</h2><p>y'' + 2y' + 5y = 0 (damped oscillator)</p><h2>Example 17: RLC circuit</h2><p>LQ'' + RQ' + Q/C = 0</p><h2>Example 18: Stability</h2><p>All real parts negative → stable</p><h2>Example 19: Oscillations</h2><p>Complex roots → oscillatory</p><h2>Example 20: Summary</h2><p>Characteristic equation determines solution form</p>`
                },
                {
                    title: "Examples",
                    content: `<h2>Practice solving constant coefficient ODEs</h2><h2>Example 1: y'' - 4y = 0</h2><p>r^2 - 4 = 0, r = ±2 → y = C1 e^(2x) + C2 e^(-2x)</p><h2>Example 2: y'' + 9y = 0</h2><p>r^2 + 9 = 0, r = ±3i → y = C1 cos(3x) + C2 sin(3x)</p><h2>Example 3: y'' + 2y' + y = 0</h2><p>r^2 + 2r + 1 = 0, r = -1 (double) → y = (C1 + C2 x)e^(-x)</p><h2>Example 4: y'' + 3y' - 4y = 0</h2><p>r^2 + 3r - 4 = 0, r = 1, -4 → y = C1 e^x + C2 e^(-4x)</p><h2>Example 5: y'' + y' - 2y = 0</h2><p>r^2 + r - 2 = 0, r = 1, -2 → y = C1 e^x + C2 e^(-2x)</p><h2>Example 6: y''' - y'' = 0</h2><p>r^2(r-1) = 0, r = 0, 0, 1 → y = C1 + C2 x + C3 e^x</p><h2>Example 7: y^(4) - y = 0</h2><p>(r^2-1)(r^2+1) = 0</p><h2>Example 8: y'' + 6y' + 13y = 0</h2><p>r = -3 ± 2i → y = e^(-3x)(C1 cos(2x) + C2 sin(2x))</p><h2>Example 9: y'' - 3y' + 2y = 0</h2><p>r = 1, 2 → y = C1 e^x + C2 e^(2x)</p><h2>Example 10: y'' - 2y' + 5y = 0</h2><p>r = 1 ± 2i</p><h2>Example 11: y'' - 6y' + 9y = 0</h2><p>r = 3 (double) → y = (C1 + C2 x)e^(3x)</p><h2>Example 12: y'' + 4y' + 8y = 0</h2><p>r = -2 ± 2i</p><h2>Example 13: y'' - y' - 2y = 0</h2><p>r = 2, -1 → y = C1 e^(2x) + C2 e^(-x)</p><h2>Example 14: y'' + 8y' + 16y = 0</h2><p>r = -4 (double)</p><h2>Example 15: y''' + y'' - 2y' = 0</h2><p>r(r^2 + r - 2) = 0</p><h2>Example 16: y^(4) - 4y''' + 6y'' - 4y' + y = 0</h2><p>(r-1)^4 = 0</p><h2>Example 17: y'' + 10y' + 25y = 0</h2><p>r = -5 (double)</p><h2>Example 18: y'' + 3y' = 0</h2><p>r(r+3) = 0 → y = C1 + C2 e^(-3x)</p><h2>Example 19: y'' - 10y' + 25y = 0</h2><p>r = 5 (double)</p><h2>Example 20: y''' - 3y'' + 3y' - y = 0</h2><p>(r-1)^3 = 0</p>`
                },
                {
                    title: "Repeated Roots",
                    content: `<h2>When characteristic equation has repeated roots</h2><p>Multiplicity m → add factors of x, x^2, ..., x^(m-1)</p><h2>Example 1: Double root</h2><p>y'' + 4y' + 4y = 0, r = -2 (double)</p><p><strong>Solution:</strong> y = (C1 + C2 x)e^(-2x)</p><h2>Example 2: Triple root</h2><p>y''' + 3y'' + 3y' + y = 0, r = -1 (triple)</p><p><strong>Solution:</strong> y = (C1 + C2 x + C3 x^2)e^(-x)</p><h2>Example 3: Double zero</h2><p>y'' = 0, r = 0 (double)</p><p><strong>Solution:</strong> y = C1 + C2 x</p><h2>Example 4: Double imaginary</h2><p>y'' + ω^2 = 0 gives complex pair, not repeated</p><h2>Example 5: Quadratic double</h2><p>(r-a)^2 = 0</p><p><strong>Solution:</strong> y = (C1 + C2 x)e^(ax)</p><h2>Example 6: Real part double</h2><p>y'' + 2y' + 1 = 0, r = -1 (double)</p><h2>Example 7: Higher multiplicity</h2><p>(r-a)^m = 0</p><p><strong>Solution:</strong> y = e^(ax)(C1 + C2 x + ... + Cm x^(m-1))</p><h2>Example 8: IVP double</h2><p>y'' + 4y' + 4y = 0, y(0)=1, y'(0)=0</p><p><strong>Solution:</strong> y = (1 - x)e^(-2x)</p><h2>Example 9: Damped spring</h2><p>Critically damped: y'' + 2ζωy' + ω^2y = 0, ζ = 1</p><h2>Example 10: Physical meaning</h2><p>No oscillation, fastest return without overshoot</p><h2>Example 11: Find form</h2><p>For r = 5, 5, -2 → y = (C1 + C2 x)e^(5x) + C3 e^(-2x)</p><h2>Example 12: Three double</h2><p>Triple root in second-order? Impossible.</p><h2>Example 13: With forcing</h2><p>Double root + particular solution</p><h2>Example 14: Reduction</h2><p>When r1 = r2, y2 = x*e^(r1 x)</p><h2>Example 15: General formula</h2><p>For (r-a)^k, solutions: e^(ax), xe^(ax), ..., x^(k-1)e^(ax)</p><h2>Example 16: Verify linear independence</h2><p>e^(ax) and xe^(ax) are independent</p><h2>Example 17: Wronskian</h2><p>W(e^(ax), xe^(ax)) = e^(2ax)</p><h2>Example 18: Application</h2><p>Critical damping in circuits</p><h2>Example 19: Design</h2><p>Choose R for critical damping</p><h2>Example 20: Summary</h2><p>Double roots → multiply by x</p>`
                }
            ],
            exercises: [
                { question: "Solve: y'' - y = 0", answer: "y = C1 e^x + C2 e^(-x)" },
                { question: "Solve: y'' + 9y = 0", answer: "y = C1 cos(3x) + C2 sin(3x)" }
            ]
        },
        {
            id: 7,
            title: "Non-Homogeneous Methods",
            subtitle: "Undetermined coefficients and variation of parameters",
            duration: "3 hours",
            week: "Week 7",
            sections: [
                {
                    title: "Method of Undetermined Coefficients",
                    content: `<h2>Trial forms for y_p based on g(x)</h2><h2>Example 1: Basic</h2><pre><code>y'' - 3y' + 2y = 2x^2
Try yp = Ax^2 + Bx + C
Substitute and solve
yp = x^2 + 3x + 7/2</code></pre><h2>Example 2: Polynomial</h2><p>y'' + y = x^2</p><p>Try yp = Ax^2 + Bx + C</p><p><strong>Solution:</strong> yp = x^2 - 2</p><h2>Example 3: Exponential</h2><p>y'' - y = e^(2x)</p><p>Try yp = Ae^(2x)</p><p><strong>Solution:</strong> yp = (1/3)e^(2x)</p><h2>Example 4: Exponential (root conflict)</h2><p>y'' - y = e^x</p><p>Try yp = Axe^x</p><p><strong>Solution:</strong> yp = (x/2)e^x</p><h2>Example 5: Sine</h2><p>y'' + y = sin(x)</p><p>Try yp = A sin(x) + B cos(x)</p><p><strong>Solution:</strong> yp = (x/2) cos(x)</p><h2>Example 6: Cosine</h2><p>y'' + 4y = cos(2x)</p><p>Try yp = A x cos(2x) + B x sin(2x)</p><h2>Example 7: Polynomial × exp</h2><p>y'' - y = xe^x</p><p>Try yp = (Ax + B)e^x</p><h2>Example 8: Sum</h2><p>y'' + y = x + e^x</p><p>yp = yp1 + yp2</p><h2>Example 9: Product × sin</h2><p>y'' + y = x sin(x)</p><p>Try yp = (Ax + B) sin(x) + (Cx + D) cos(x)</p><h2>Example 10: Second derivative</h2><p>y'' - 4y = sin(2x)</p><p>Already not a solution of homogeneous</p><h2>Example 11: Trial form table</h2><p>g(x) = Pn(x) → x^n + ... + a0</p><h2>Example 12: Exponential trial</h2><p>g(x) = e^(ax) → Ce^(ax)</p><h2>Example 13: Trig trial</h2><p>g(x) = sin(ax) or cos(ax) → A sin + B cos</p><h2>Example 14: Annihilator</h2><p>(D-a) annihilates e^(ax)</p><h2>Example 15: (D^2 + a^2) annihilates sin(ax), cos(ax)</p><h2>Example 16: Method summary</h2><p>1. Solve homogeneous first</p><p>2. Guess form of yp</p><h2>Example 17: Modification rule</h2><p>If trial solution overlaps with homogeneous, multiply by x</p><h2>Example 18: Third order</h2><p>y''' - y'' = x</p><h2>Example 19: System analogy</h2><p>Same method for systems</p><h2>Example 20: Verify</h2><p>Always verify yp solves original ODE</p>`
                },
                {
                    title: "Variation of Parameters",
                    content: `<h2>Formula: y_p = -y1 ∫(y2 g/W) dx + y2 ∫(y1 g/W) dx</h2><h2>Example 1: Basic</h2><p>y'' + y = sec(x)</p><p>y1 = cos(x), y2 = sin(x), W = 1</p><p><strong>Solution:</strong> yp = cos(x) ln|cos(x)| + x sin(x)</p><h2>Example 2: Standard</h2><p>y'' + y = tan(x)</p><h2>Example 3: With sec^2</h2><p>y'' + y = sec^2(x)</p><h2>Example 4: Exponential</h2><p>y'' - y = e^(2x)</p><p>yp = (1/3)e^(2x)</p><h2>Example 5: Polynomial</h2><p>y'' + y = x</p><p>yp = x</p><h2>Example 6: General formula</h2><p>y1, y2 fundamental set, W = y1 y2' - y1' y2</p><h2>Example 7: Higher order</h2><p>Extension to nth order</p><h2>Example 8: When W = 0</h2><p>Solutions must be independent</p><h2>Example 9: With g(x)</h2><p>Formula works for any g(x)</p><h2>Example 10: Particular + homogeneous</h2><p>Complete solution: y = yh + yp</p><h2>Example 11: Integration</h2><p>May require integration by parts</p><h2>Example 12: Verification</h2><p>Check yp satisfies original</p><h2>Example 13: vs Undetermined</h2><p>Variation works for any g, undetermined needs specific forms</p><h2>Example 14: Real-world</h2><p>Useful for forcing functions from data</p><h2>Example 15: Constants</h2><p>Keep constants of integration</p><h2>Example 16: Simplify</h2><p>Often can simplify integrals</p><h2>Example 17: Alternative form</h2><p>yp = -y1 ∫(y2 g/W) + y2 ∫(y1 g/W)</p><h2>Example 18: Method choice</h2><p>Choose variation when g(x) is complicated</p><h2>Example 19: Wronskian</h2><p>W must be nonzero</p><h2>Example 20: Summary</h2><p>Systematic method always works</p>`
                }
            ],
            exercises: [
                { question: "Particular for y'' - y = x^2?", answer: "Try yp = Ax^2 + Bx + C" }
            ]
        },
        {
            id: 8,
            title: "Variable Coefficients",
            subtitle: "Cauchy-Euler equations",
            duration: "2 hours",
            week: "Week 8",
            sections: [
                {
                    title: "Cauchy-Euler Equation",
                    content: `<h2>Form: ax^2 y'' + bxy' + cy = 0</h2><p>Assume y = x^r</p><h2>Example 1: Basic</h2><p>x^2 y'' - 2xy' + 2y = 0</p><pre><code>Assume y = x^r
r(r-1) - 2r + 2 = 0
r^2 - 3r + 2 = 0
r = 1, 2
y = C1 x + C2 x^2</code></pre><h2>Example 2: Distinct real</h2><p>x^2 y'' + xy' - y = 0</p><p>r = 1, -1 → y = C1 x + C2/x</p><h2>Example 3: Equal roots</h2><p>x^2 y'' + 5xy' + 4y = 0</p><p>r = -2, -2 → y = (C1 + C2 ln x)/x^2</p><h2>Example 4: Complex</h2><p>x^2 y'' + xy' + y = 0</p><p>r = ±i → y = C1 cos(ln x) + C2 sin(ln x)</p><h2>Example 5: Third order</h2><p>x^3 y''' + x^2 y'' - 2xy' + 2y = 0</p><h2>Example 6: With x^r</h2><p>Just substitute y = x^r</p><h2>Example 7: Indicial equation</h2><p>The equation in r from substitution</p><h2>Example 8: Real distinct</h2><p>r1 ≠ r2 → y = C1 x^r1 + C2 x^r2</p><h2>Example 9: Real equal</h2><p>r1 = r2 → y = (C1 + C2 ln x)x^r1</p><h2>Example 10: Complex</h2><p>r = α ± iβ → y = x^α(C1 cos(β ln x) + C2 sin(β ln x))</p><h2>Example 11: Non-homogeneous</h2><p>x^2 y'' + xy' + y = x</p><h2>Example 12: Variation</h2><p>Same variation of parameters works</p><h2>Example 13: IVP</h2><p>x^2 y'' - xy' + 2y = 0, y(1)=0, y'(1)=1</p><h2>Example 14: Bessel link</h2><p>x^2 y'' + xy' + (x^2 - n^2)y = 0</p><h2>Example 15: Legendre link</h2><p>(1-x^2)y'' - 2xy' + n(n+1)y = 0</p><h2>Example 16: Reduced to constant</h2><p>Let t = ln x, then d^2y/dt^2 + (b-a)dy/dt + (c/a)y = 0</p><h2>Example 17: Solve via substitution</h2><p>t = ln x transforms to constant coefficient</p><h2>Example 18: Method summary</h2><p>1. Substitute y = x^r</p><p>2. Solve indicial equation</p><h2>Example 19: Three roots</h2><p>Third order: r1, r2, r3 distinct</p><h2>Example 20: Applications</h2><p>Circular membranes, heat in cylinders</p>`
                }
            ],
            exercises: [
                { question: "Solve: x^2 y'' + xy' - y = 0", answer: "y = C1 x + C2/x" }
            ]
        },
        {
            id: 9,
            title: "Series Solutions",
            subtitle: "Power series methods",
            duration: "3 hours",
            week: "Week 9",
            sections: [
                {
                    title: "Power Series Basics",
                    content: `<h2>Ordinary Point: p(x), q(x) analytic at x0</h2><p>Can expand in power series</p><h2>Example 1: y' = y</h2><pre><code>Assume y = Σ an x^n
y' = Σ n an x^(n-1)
Equate coefficients
an+1 = an/(n+1)
y = C e^x</code></pre><h2>Example 2: y' = x + y</h2><p>Σ(n+1)an+1 x^n = x + Σ an x^n</p><h2>Example 3: y'' + y = 0</h2><p>Σ(n+2)(n+1)an+2 x^n + Σ an x^n = 0</p><p>an+2 = -an/(n+2)(n+1)</p><h2>Example 4: Airy equation</h2><p>y'' + xy = 0</p><h2>Example 5: Hermite</h2><p>y'' - 2xy' + λy = 0</p><h2>Example 6: Laguerre</h2><p>xy'' + (1-x)y' + ny = 0</p><h2>Example 7: Chebyshev</h2><p>(1-x^2)y'' - xy' + n^2 y = 0</p><h2>Example 8: Radius of convergence</h2><p>Depends on singularities</p><h2>Example 9: Recurrence relation</h2><p>an+2 = f(n) an gives solution</p><h2>Example 10: Initial conditions</h2><p>y(0) = a0, y'(0) = a1</p><h2>Example 11: Even/odd</h2><p>If RHS even, only even terms</p><h2>Example 12: Shift index</h2><p>To match powers</p><h2>Example 13: Method summary</h2><p>1. Assume Σ an (x-x0)^n</p><p>2. Substitute and simplify</p><h2>Example 14: Order reduction</h2><p>If y1 known, find y2</p><h2>Example 15: Verify solution</h2><p>Plug back to confirm</p><h2>Example 16: Particular form</h2><p>Sometimes series terminates</p><h2>Example 17: Orthogonal polynomials</h2><p>Many special functions</p><h2>Example 18: Legendre polynomials</h2><p>Pn(x) from series</p><h2>Example 19: Applications</h2><p>Quantum mechanics, vibrations</p><h2>Example 20: Summary</h2><p>Power series solves near ordinary points</p>`
                },
                {
                    title: "Example: Series Solution",
                    content: `<h2>Solve y' = y about x=0</h2><pre><code>y = Σ an x^n
y' = Σ n an x^(n-1)
Equate: (n+1)an+1 = an
a1 = a0
a2 = a0/2!
a3 = a0/3!
y = a0 Σ x^n/n! = a0 e^x</code></pre><h2>Example 1: y'' = -y</h2><p>y = C1 cos(x) + C2 sin(x)</p><h2>Example 2: y' = x^2 y</h2><p>Series solution</p><h2>Example 3: y'' + xy' + y = 0</p><p>Airy equation</p><h2>Example 4: y'' + x^2 y = 0</p><p>Parabolic cylinder</p><h2>Example 5: Bessel equation</h2><p>x^2 y'' + xy' + (x^2 - n^2)y = 0</p><h2>Example 6: Series at x0≠0</h2><p>Shift center if needed</p><h2>Example 7: Regular singular</h2><p>Can still solve with Frobenius</p><h2>Example 8: Irregular singular</h2><p>More complicated</p><h2>Example 9: Method</h2><p>Assume y = Σ an (x-x0)^(n+r)</p><h2>Example 10: Indicial</h2><p>Get equation for r</p><h2>Example 11: Two r values</h2><p>r1 - r2 not integer → two series</p><h2>Example 12: Integer difference</h2><p>May get only one series</p><h2>Example 13: Logarithms</h2><p>When r1 = r2 or differ by integer</p><h2>Example 14: Frobenius</h2><p>General method for singular points</p><h2>Example 15: Bessel J</h2><p>First kind Bessel functions</p><h2>Example 16: Bessel Y</h2><p>Second kind Bessel functions</p><h2>Example 17: Hankel</h2><p>Third kind Bessel functions</p><h2>Example 18: Modified Bessel</h2><p>Iν(x) and Kν(x)</p><h2>Example 19: Spherical Bessel</2><p>From wave equation</p><h2>Example 20: Summary</h2><p>Series methods for various ODEs</p>`
                },
                {
                    title: "Singular Points",
                    content: `<h2>Regular vs Irregular singular points</h2><p>xp^2, xq analytic → regular</p><h2>Example 1: Regular singular</h2><p>x^2 y'' + x y' + (x^2 - n^2)y = 0 (Bessel)</p><h2>Example 2: Regular</h2><p>x^2 y'' + p(x)x y' + q(x)x^2 y = 0</p><h2>Example 3: Irregular</h2><p>x^3 y'' + y = 0</p><h2>Example 4: Frobenius method</h2><p>y = Σ an x^(n+r)</p><h2>Example 5: Indicial equation</h2><p>Get r from lowest power</p><h2>Example 6: r1 - r2 not integer</h2><p>Two linearly independent solutions</p><h2>Example 7: r1 = r2</h2><p>Get second from y2 = y1 ln x</p><h2>Example 8: Integer difference</h2><p>May have log term</p><h2>Example 9: Bessel equation</h2><p>Regular singular at x=0</p><h2>Example 10: Solutions</h2><p>Jν(x) and Yν(x)</p><h2>Example 11: Legendre</h2><p>x = ±1 are singular points</p><h2>Example 12: Gauss</h2><p>Hypergeometric equation</p><h2>Example 13: Confluent hypergeometric</h2><p>Kummer's equation</p><h2>Example 14: Mathieu</h2><p>Periodic solutions</p><h2>Example 15: Hill's equation</h2><p>General periodic</p><h2>Example 16: Ince</h2><p>Mathieu stability</p><h2>Example 17: Whitthaker</h2><p>Confluent</p><h2>Example 18: Hermite</h2><p>Quantum oscillator</p><h2>Example 19: Laguerre</h2><p>Radial hydrogen</p><h2>Example 20: Summary</h2><p>Frobenius for regular singular points</p>`
                }
            ],
            exercises: [
                { question: "Series for y'' = -y?", answer: "y = C1 cos(x) + C2 sin(x)" }
            ]
        },
        {
            id: 10,
            title: "Laplace Transforms",
            subtitle: "Transform methods for ODEs",
            duration: "3 hours",
            week: "Week 10",
            sections: [
                {
                    title: "Definition and Basic Transforms",
                    content: `<h2>L{f(t)} = ∫0^∞ e^(-st) f(t) dt</h2><p>Transforms ODE to algebraic equation</p><h2>Example 1: L{1}</h2><p>∫0^∞ e^(-st) dt = 1/s, s > 0</p><h2>Example 2: L{t}</h2><p>∫0^∞ t e^(-st) dt = 1/s^2</p><h2>Example 3: L{t^n}</h2><p>∫0^∞ t^n e^(-st) dt = n!/s^(n+1)</p><h2>Example 4: L{e^(at)}</h2><p>∫0^∞ e^(at) e^(-st) dt = 1/(s-a), s > a</p><h2>Example 5: L{sin(at)}</h2><p>∫0^∞ sin(at) e^(-st) dt = a/(s^2 + a^2)</p><h2>Example 6: L{cos(at)}</h2><p>∫0^∞ cos(at) e^(-st) dt = s/(s^2 + a^2)</p><h2>Example 7: L{sinh(at)}</h2><p>a/(s^2 - a^2)</p><h2>Example 8: L{cosh(at)}</h2><p>s/(s^2 - a^2)</p><h2>Example 9: L{e^(at)sin(bt)}</h2><p>b/((s-a)^2 + b^2)</p><h2>Example 10: L{e^(at)cos(bt)}</h2><p>(s-a)/((s-a)^2 + b^2)</p><h2>Example 11: L{t sin(at)}</h2><p>2as/(s^2 + a^2)^2</p><h2>Example 12: L{t cos(at)}</h2><p>(s^2 - a^2)/(s^2 + a^2)^2</p><h2>Example 13: L{δ(t-a)}</h2><p>e^(-as)</p><h2>Example 14: L{u(t-a)}</h2><p>e^(-as)/s</p><h2>Example 15: L{f(t-a)u(t-a)}</h2><p>e^(-as)F(s)</p><h2>Example 16: L{f'(t)}</h2><p>sF(s) - f(0)</p><h2>Example 17: L{f''(t)}</h2><p>s^2 F(s) - sf(0) - f'(0)</p><h2>Example 18: L{t^n}</h2><p>n!/s^(n+1)</p><h2>Example 19: L{1/√t}</h2><p>√(π/s)</p><h2>Example 20: L{erf(t)}</h2><p>1/s * (1 - e^(-s√π/2))</p>`
                },
                {
                    title: "Properties",
                    content: `<h2>Linearity: L{af+bg} = aF + bG</h2><p>Transform of sum = sum of transforms</p><h2>Example 1: First Shift</h2><p>L{e^(at)f(t)} = F(s-a)</p><h2>Example 2: Second Shift</h2><p>L{f(t-a)u(t-a)} = e^(-as)F(s)</p><h2>Example 3: Derivative of F</2><p>L{(-t)^n f(t)} = d^nF/ds^n</p><h2>Example 4: Integration</h2><p>L{∫0^t f(τ)dτ} = F(s)/s</p><h2>Example 5: Periodic</h2><p>L{f(t+T)} = F(s)/(1-e^(-sT))</p><h2>Example 6: Convolution</h2><p>L{f * g} = F(s)G(s)</p><h2>Example 7: t-translation</h2><p>L{t f(t)} = -F'(s)</p><h2>Example 8: Initial value</h2><p>lim f(t) as t→0 = lim sF(s) as s→∞</p><h2>Example 9: Final value</h2><p>lim f(t) as t→∞ = lim sF(s) as s→0</p><h2>Example 10: Transform of derivatives</h2><p>L{f'} = sF - f(0)</p><h2>Example 11: Second derivative</h2><p>L{f''} = s^2 F - sf(0) - f'(0)</p><h2>Example 12: Chain rule</h2><p>L{e^(-at)f(t)} = F(s+a)</p><h2>Example 13: Multiplication</h2><p>Property for f(t)g(t)</p><h2>Example 14: Division</h2><p>For f(t)/t when limit exists</p><h2>Example 15: Using table</h2><p>Combine properties</p><h2>Example 16: Solve ODE</h2><p>Transform → algebraic → inverse</p><h2>Example 17: Partial fractions</h2><p>For inverse transforms</p><h2>Example 18: Heaviside</h2><p>Cover-up method</p><h2>Example 19: Bromwich</h2><p>Inverse integral formula</p><h2>Example 20: Summary</h2><p>Use properties to simplify transforms</p>`
                },
                {
                    title: "Solving IVPs",
                    content: `<h2>Method: Take Laplace → Solve algebraically → Inverse Laplace</h2><h2>Example 1: Basic</h2><pre><code>y' + 2y = 0, y(0) = 3
sY - y(0) + 2Y = 0
(s+2)Y = 3
Y = 3/(s+2)
y = 3e^(-2t)</code></pre><h2>Example 2: Second order</h2><p>y'' + y = 0, y(0)=1, y'(0)=0</p><p><strong>Solution:</strong> y = cos(t)</p><h2>Example 3: With forcing</h2><p>y' + y = 1, y(0)=0</p><p><strong>Solution:</strong> y = 1 - e^(-t)</p><h2>Example 4: y'' + 4y = 0</h2><p>y(0)=0, y'(0)=1</p><p><strong>Solution:</strong> y = (1/2) sin(2t)</p><h2>Example 5: Exponential forcing</h2><p>y' - y = e^t, y(0)=0</p><p><strong>Solution:</strong> y = te^t</p><h2>Example 6: Trig forcing</h2><p>y'' + y = sin(t), y(0)=0, y'(0)=0</p><p><strong>Solution:</strong> y = (1/2)(sin t - t cos t)</p><h2>Example 7: Step input</h2><p>y' + y = u(t-1), y(0)=0</p><h2>Example 8: Convolution</h2><p>y'' = f(t), y(0)=0, y'(0)=0</p><p><strong>Solution:</strong> y = ∫0^t (t-τ)f(τ)dτ</p><h2>Example 9: Repeated roots</h2><p>y'' + 2y' + y = 0, y(0)=1, y'(0)=0</p><p><strong>Solution:</strong> y = (1 + t)e^(-t)</p><h2>Example 10: Damped</h2><p>y'' + 2y' + 5y = 0, y(0)=1, y'(0)=0</p><p><strong>Solution:</strong> y = e^(-t)(cos(2t) + (1/2)sin(2t))</p><h2>Example 11: Nonhomogeneous</h2><p>y'' + y = t, y(0)=0, y'(0)=1</p><h2>Example 12: System</h2><p>x' = x + y, y' = -x + y</p><h2>Example 13: Transfer function</h2><p>Y(s)/U(s) = G(s)</p><h2>Example 14: Stability</h2><p>Poles in left half-plane</p><h2>Example 15: Resonance</h2><p>When forcing matches natural frequency</p><h2>Example 16: Partial fractions</h2><p>Break down Y(s) for inverse</p><h2>Example 17: Complete squares</h2><p>For repeated quadratic factors</p><h2>Example 18: Damping</h2><p>Critically damped case</p><h2>Example 19: Underdamped</h2><p>Oscillatory decay</p><h2>Example 20: Summary</h2><p>Transform method for linear ODEs</p>`
                }
            ],
            exercises: [
                { question: "L^-1{1/(s-5)}?", answer: "e^(5t)" },
                { question: "Solve: y' + y = 1, y(0) = 0", answer: "y = 1 - e^(-t)" }
            ]
        }
    ]
};
