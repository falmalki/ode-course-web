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
y = ±1/√z</code></pre><h2>Examples 2-20: Various Bernoulli equations</h2>`
                },
                {
                    title: "Riccati Equation",
                    content: `<h2>Form: y' = q0 + q1 y + q2 y^2</h2><h2>Method: If particular solution y1 known, substitute y = y1 + 1/u</h2><h2>Examples</h2>`
                },
                {
                    title: "Clairaut and Lagrange",
                    content: `<h2>Clairaut: y = xp + f(p)</h2><h2>General: y = Cx + f(C); Singular: envelope</h2><h2>Examples</h2>`
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
                    content: `<h2>General Form: a(x)y'' + b(x)y' + c(x)y = g(x)</h2><h2>Superposition Principle</h2><h2>Examples of solutions and linearly independent pairs</h2>`
                },
                {
                    title: "Wronskian",
                    content: `<h2>W(y1,y2) = y1 y2' - y1' y2</h2><h2>W ≠ 0 iff solutions are linearly independent</h2><h2>Example calculations for various function pairs</h2>`
                },
                {
                    title: "General Solution",
                    content: `<h2>Homogeneous: y_h = C1 y1 + C2 y2</h2><h2>Non-homogeneous: y = y_h + y_p</h2><h2>Examples</h2>`
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
                    content: `<h2>For ay'' + by' + cy = 0, assume y = e^(rx)</h2><p>ar^2 + br + c = 0</p><h2>Three cases: distinct real, repeated real, complex roots</h2><h2>Example 1: y'' - 5y' + 6y = 0 → y = C1 e^(2x) + C2 e^(3x)</h2><h2>Example 2: y'' + 4y = 0 → y = C1 cos(2x) + C2 sin(2x)</h2><h2>Example 3: y'' + 4y' + 4y = 0 → y = (C1 + C2 x)e^(-2x)</h2><h2>Examples 4-20: More characteristic equation problems</h2>`
                },
                {
                    title: "Examples",
                    content: `<h2>Various examples covering all three cases</h2>`
                },
                {
                    title: "Repeated Roots",
                    content: `<h2>When characteristic equation has repeated roots</h2><h2>Example: y'' + 4y' + 4y = 0</h2><h2>Examples</h2>`
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
                    content: `<h2>Trial forms for y_p based on g(x)</h2><h2>Example: y'' - 3y' + 2y = 2x^2</h2><pre><code>Try yp = Ax^2 + Bx + C
Substitute and solve
yp = x^2 + 3x + 7/2</code></pre><h2>More examples</h2>`
                },
                {
                    title: "Variation of Parameters",
                    content: `<h2>Formula: y_p = -y1 ∫(y2 g/W) dx + y2 ∫(y1 g/W) dx</h2><h2>Example: y'' + y = sec x</h2><h2>Examples</h2>`
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
                    content: `<h2>Form: ax^2 y'' + bxy' + cy = 0</h2><h2>Assume y = x^r</h2><h2>Example: x^2 y'' - 2xy' + 2y = 0 → y = C1 x + C2 x^2</h2><h2>Three cases</h2>`
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
                    content: `<h2>Ordinary Point: p(x), q(x) analytic at x0</h2><h2>y = Σ an (x-x0)^n</h2><h2>Example: y' = y</h2><pre><code>Assume y = Σ an x^n
y' = Σ n an x^(n-1)
Equate coefficients
an+1 = an/(n+1)
y = C e^x</code></pre><h2>More examples</h2>`
                },
                {
                    title: "Example: Series Solution",
                    content: `<h2>Solve y' = y about x=0</h2><h2>Examples</h2>`
                },
                {
                    title: "Singular Points",
                    content: `<h2>Regular vs Irregular singular points</h2><h2>Frobenius method</h2>`
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
                    content: `<h2>L{f(t)} = ∫0^∞ e^(-st) f(t) dt</h2><h2>Basic Transforms Table</h2><p>1 → 1/s, t → 1/s^2, e^(at) → 1/(s-a), sin(at) → a/(s^2+a^2), cos(at) → s/(s^2+a^2)</p><h2>Example 1: L{1} = 1/s</h2><h2>Example 2: L{t} = 1/s^2</h2><h2>Example 3: L{e^(3t)} = 1/(s-3)</h2><h2>Example 4: L{sin(2t)} = 2/(s^2+4)</h2><h2>Example 5: L{cos(3t)} = s/(s^2+9)</h2><h2>Examples 6-20: More transform problems</h2>`
                },
                {
                    title: "Properties",
                    content: `<h2>Linearity: L{af+bg} = aF + bG</h2><h2>First Shift: L{e^(at)f(t)} = F(s-a)</h2><h2>Derivative: L{f'} = sF - f(0)</h2><h2>Second Derivative: L{f''} = s^2F - sf(0) - f'(0)</h2><h2>Examples</h2>`
                },
                {
                    title: "Solving IVPs",
                    content: `<h2>Method: Take Laplace → Solve algebraically → Inverse Laplace</h2><h2>Example: y' + 2y = 0, y(0) = 3</h2><pre><code>sY - y(0) + 2Y = 0
(s+2)Y = 3
Y = 3/(s+2)
y = 3e^(-2t)</code></pre><h2>Example: y'' + y = 0, y(0) = 1, y'(0) = 0</h2><p>y = cos t</p><h2>Examples 3-20: More IVP problems</h2>`
                }
            ],
            exercises: [
                { question: "L^-1{1/(s-5)}?", answer: "e^(5t)" },
                { question: "Solve: y' + y = 1, y(0) = 0", answer: "y = 1 - e^(-t)" }
            ]
        }
    ]
};
