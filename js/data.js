// ODE Course Data - All Modules Content
const courseData = {
    modules: [
        {
            id: 1,
            title: "Introduction to ODEs",
            subtitle: "Course overview and fundamentals",
            duration: "3 hours",
            week: "Week 1",
            sections: [
                {
                    title: "What is a Differential Equation?",
                    content: `<h2>Definition</h2>
<p>A <strong>differential equation</strong> is a mathematical equation that relates a function with its derivatives.</p>
<blockquote>Example: $\\frac{dy}{dx} = 2x$ has solution $y = x^2 + C$</blockquote>
<h2>Why Study ODEs?</h2>
<ul>
<li><strong>Physics:</strong> Newton's laws, Maxwell's equations</li>
<li><strong>Engineering:</strong> Control systems, circuits</li>
<li><strong>Biology:</strong> Population dynamics</li>
<li><strong>Economics:</strong> Growth models</li>
</ul>`
                },
                {
                    title: "Classification of ODEs",
                    content: `<h2>By Order</h2>
<ul>
<li><strong>First-order:</strong> $\\frac{dy}{dx} = f(x,y)$</li>
<li><strong>Second-order:</strong> $\\frac{d^2y}{dx^2} = f(x,y,y')$</li>
<li><strong>n-th order:</strong> $y^{(n)} = f(x,y,y',\\dots,y^{(n-1)})$</li>
</ul>
<h2>By Linearity</h2>
<ul>
<li><strong>Linear:</strong> $a_n(x)y^{(n)} + \\dots + a_0(x)y = g(x)$</li>
<li><strong>Nonlinear:</strong> Contains products of $y$ and its derivatives</li>
</ul>`
                },
                {
                    title: "Existence and Uniqueness",
                    content: `<h2>Picard-Lindelöf Theorem</h2>
<p>If $f(x,y)$ and $\\frac{\\partial f}{\\partial y}$ are continuous near $(x_0,y_0)$, then there exists a unique solution passing through $(x_0,y_0)$.</p>
<blockquote><strong>Example:</strong> $y' = \\sqrt{y}$, $y(0) = 0$ has multiple solutions</blockquote>`
                }
            ],
            exercises: [
                { question: "What is the order of: y''' + 2y' + y = sin(x)?", answer: "Third order" },
                { question: "Is y' = y² linear?", answer: "No, it's nonlinear" },
                { question: "Solution of y' = 2x?", answer: "y = x² + C" }
            ]
        },
        {
            id: 2,
            title: "First-Order ODEs: Separation",
            subtitle: "Separable and homogeneous equations",
            duration: "3 hours",
            week: "Week 2",
            sections: [
                {
                    title: "Separable Equations",
                    content: `<h2>Definition</h2>
<p>An ODE is <strong>separable</strong> if it can be written as:</p>
$$\\frac{dy}{dx} = g(x) \\cdot h(y)$$
<h2>Solution Method</h2>
<ol>
<li>Separate variables: $\\frac{1}{h(y)}dy = g(x)dx$</li>
<li>Integrate both sides</li>
</ol>
<pre><code class="language-matlab">% Example: dy/dx = xy
% Separate: dy/y = x dx
% Integrate: ln|y| = x²/2 + C
% Solution: y = Ce^(x²/2)</code></pre>`
                },
                {
                    title: "Examples of Separation",
                    content: `<h2>Example 1: Basic Separation</h2>
<p>Solve: $\\frac{dy}{dx} = xy$</p>
<pre><code class="language-matlab">dy/y = x dx
∫ dy/y = ∫ x dx
ln|y| = x²/2 + C
y = Ce^(x²/2)</code></pre>
<h2>Example 2: Newton's Law of Cooling</h2>
<p>$\\frac{dT}{dt} = -k(T - T_{env})$</p>
<p>Solution: $T(t) = T_{env} + (T_0 - T_{env})e^{-kt}$</p>`
                },
                {
                    title: "Homogeneous Equations",
                    content: `<h2>Definition</h2>
<p>An equation is <strong>homogeneous</strong> if:</p>
$$\\frac{dy}{dx} = F\\left(\\frac{y}{x}\\right)$$
<h2>Method</h2>
<ol>
<li>Substitute $v = y/x$</li>
<li>$y = vx$, $\\frac{dy}{dx} = v + x\\frac{dv}{dx}$</li>
<li>Solve the resulting separable equation</li>
<li>Replace $v$ with $y/x$</li>
</ol>
<pre><code class="language-matlab">% Example: dy/dx = (y/x) + (x/y)
% Let v = y/x, then: v + x*dv/dx = v + 1/v
% x*dv/dx = 1/v
% v*dv = dx/x</code></pre>`
                }
            ],
            exercises: [
                { question: "Solve: dy/dx = xy", answer: "y = Ce^(x²/2)" },
                { question: "Solve: dy/dx = x/y", answer: "y² - x² = C" },
                { question: "Solve: dy/dx = y/x", answer: "y = Cx" }
            ]
        },
        {
            id: 3,
            title: "First-Order ODEs: Exact & Linear",
            subtitle: "Exact equations and linear equations",
            duration: "3 hours",
            week: "Week 3",
            sections: [
                {
                    title: "Exact Differential Equations",
                    content: `<h2>Definition</h2>
<p>$M(x,y)dx + N(x,y)dy = 0$ is <strong>exact</strong> if $\\frac{\\partial M}{\partial y} = \\frac{\\partial N}{\partial x}$</p>
<h2>Solution Method</h2>
<p>Find $\\psi(x,y)$ such that $\\frac{\partial \\psi}{\partial x} = M$ and $\\frac{\\partial \\psi}{\partial y} = N$</p>
<p>Solution: $\\psi(x,y) = C$</p>
<pre><code class="language-matlab">% Example: (2xy + y²)dx + (x² + 2xy)dy = 0
% My = 2x + 2y, Nx = 2x + 2y (exact!)
% ψ = x²y + xy² = C</code></pre>`
                },
                {
                    title: "Integrating Factors",
                    content: `<h2>When to Use</h2>
<p>If equation is not exact, try multiplying by integrating factor $\\mu(x)$ or $\\mu(y)$</p>
<h2>Formulas</h2>
<p>If $\\frac{M_y - N_x}{N}$ depends only on $x$:</p>
$$\\mu(x) = e^{\\int \\frac{M_y - N_x}{N} dx}$$
<pre><code class="language-matlab">% Example: (x + y³)dx + xy²dy = 0
% (My - Nx)/N = 2/x (function of x only)
% μ(x) = e^(∫2/x dx) = x²</code></pre>`
                },
                {
                    title: "First-Order Linear Equations",
                    content: `<h2>Standard Form</h2>
$$\\frac{dy}{dx} + p(x)y = q(x)$$
<h2>Integrating Factor Method</h2>
<ol>
<li>$\\mu(x) = e^{\\int p(x)dx}$</li>
<li>Multiply equation by $\\mu$</li>
<li>$\\frac{d}{dx}(\\mu y) = \mu q$</li>
<li>Integrate: $\\mu y = \\int \mu q dx + C$</li>
</ol>
<pre><code class="language-matlab">% Example: y' + 2y = 4
% μ = e^(∫2dx) = e^(2x)
% d/dx(e^(2x)y) = 4e^(2x)
% e^(2x)y = 2e^(2x) + C
% y = 2 + Ce^(-2x)</code></pre>`
                }
            ],
            exercises: [
                { question: "Solve: y' + 2y = x", answer: "y = x/2 - 1/4 + Ce^(-2x)" },
                { question: "Solve: y' + y/x = x²", answer: "y = x³/4 + C/x" },
                { question: "Is (y)dx + (x)dy = 0 exact?", answer: "Yes, My = 1, Nx = 1" }
            ]
        },
        {
            id: 4,
            title: "Bernoulli & Riccati Equations",
            subtitle: "Nonlinear first-order equations",
            duration: "2 hours",
            week: "Week 4",
            sections: [
                {
                    title: "Bernoulli Equation",
                    content: `<h2>Form</h2>
$$y' + p(x)y = q(x)y^n$$
<h2>Method</h2>
<p>Substitute $z = y^{1-n}$ (for $n \\neq 0,1$)</p>
<p>This converts to a linear equation in $z$:</p>
$$\\frac{dz}{dx} + (1-n)p(x)z = (1-n)q(x)$$
<pre><code class="language-matlab">% Example: y' + y = xy³
% n = 3, substitute z = y^(-2)
% z' - 2z = -2x
% Solve linear: z = x² + Ce²ˣ</code></pre>`
                },
                {
                    title: "Riccati Equation",
                    content: `<h2>Form</h2>
$$y' = q_0(x) + q_1(x)y + q_2(x)y^2$$
<h2>Method</h2>
<p>If a particular solution $y_1$ is known, substitute:</p>
$$y = y_1 + \\frac{1}{u}$$
<p>This gives a Bernoulli equation in $u$!</p>`
                },
                {
                    title: "Clairaut and Lagrange",
                    content: `<h2>Clairaut's Equation</h2>
$$y = xp + f(p), \\quad p = y'$$
<p>General solution: $y = Cx + f(C)$</p>
<p>Singular solution: from envelope $p + f'(p) = 0$</p>
<pre><code class="language-matlab">% Example: y = xy' + (y')²
% General: y = Cx + C²
% Singular: y = -x²/4</code></pre>`
                }
            ],
            exercises: [
                { question: "Solve: y' + y = y²", answer: "y = 1/(1 + Ce^x)" },
                { question: "Solve: y' + y/x = xy³", answer: "Back-substitute z = y^(-2)" },
                { question: "Bernoulli form: y' + p(x)y = q(x)y^n", answer: "Use z = y^(1-n)" }
            ]
        },
        {
            id: 5,
            title: "Higher-Order: Fundamentals",
            subtitle: "Linear independence and Wronskian",
            duration: "3 hours",
            week: "Week 5",
            sections: [
                {
                    title: "Second-Order Linear ODEs",
                    content: `<h2>General Form</h2>
$$a(x)y'' + b(x)y' + c(x)y = g(x)$$
<h2>Superposition Principle</h2>
<p>If $y_1$ and $y_2$ are solutions of the homogeneous equation, then $c_1y_1 + c_2y_2$ is also a solution.</p>`
                },
                {
                    title: "Linear Independence and Wronskian",
                    content: `<h2>Wronskian</h2>
$$W(y_1,y_2) = \\begin{vmatrix} y_1 & y_2 \\\\ y_1' & y_2' \\end{vmatrix} = y_1y_2' - y_1'y_2$$
<h2>Theorem</h2>
<p>Solutions $y_1, y_2$ are linearly independent on an interval if and only if $W \\neq 0$ on that interval.</p>
<pre><code class="language-matlab">% Example: y1 = e^x, y2 = e^(2x)
% W = e^x(2e^x) - e^x(e^x) = e^(2x) ≠ 0
% Independent!</code></pre>`
                },
                {
                    title: "General Solution Structure",
                    content: `<h2>Homogeneous Equation</h2>
<p>General solution: $y_h = C_1y_1 + C_2y_2$ where $y_1, y_2$ are independent solutions</p>
<h2>Non-Homogeneous Equation</h2>
<p>General solution: $y = y_h + y_p$ where $y_p$ is any particular solution</p>`
                }
            ],
            exercises: [
                { question: "Wronskian of sin(x), cos(x)?", answer: "W = -1 (nonzero, independent)" },
                { question: "General solution form for non-homogeneous?", answer: "y = y_h + y_p" },
                { question: "If W = 0, are solutions independent?", answer: "No, they're linearly dependent" }
            ]
        },
        {
            id: 6,
            title: "Constant Coefficient Equations",
            subtitle: "Homogeneous ODEs with constant coefficients",
            duration: "3 hours",
            week: "Week 6",
            sections: [
                {
                    title: "Characteristic Equation",
                    content: `<h2>Method</h2>
<p>For $ay'' + by' + cy = 0$, assume $y = e^{rx}$:</p>
$$ar^2 + br + c = 0$$
<h2>Three Cases</h2>
<ol>
<li><strong>Distinct real roots:</strong> $y = C_1e^{r_1x} + C_2e^{r_2x}$</li>
<li><strong>Repeated real root:</strong> $y = (C_1 + C_2x)e^{rx}$</li>
<li><strong>Complex roots:</strong> $y = e^{\\alpha x}(C_1\\cos(\beta x) + C_2\\sin(\beta x))$</li>
</ol>`
                },
                {
                    title: "Examples",
                    content: `<h2>Example 1: Distinct Roots</h2>
<p>Solve: $y'' - 5y' + 6y = 0$</p>
<pre><code class="language-matlab">r² - 5r + 6 = 0
(r-2)(r-3) = 0
r = 2, 3
y = C1*e^(2x) + C2*e^(3x)</code></pre>
<h2>Example 2: Complex Roots</h2>
<p>Solve: $y'' + 4y = 0$</p>
<pre><code class="language-matlab">r² + 4 = 0
r = ±2i
y = C1*cos(2x) + C2*sin(2x)</code></pre>`
                },
                {
                    title: "Repeated Roots Example",
                    content: `<h2>Example: Repeated Root</h2>
<p>Solve: $y'' + 4y' + 4y = 0$</p>
<pre><code class="language-matlab">r² + 4r + 4 = 0
(r+2)² = 0
r = -2 (double root)
y = (C1 + C2*x)*e^(-2x)</code></pre>`
                }
            ],
            exercises: [
                { question: "Solve: y'' - y = 0", answer: "y = C1*e^x + C2*e^(-x)" },
                { question: "Solve: y'' + 9y = 0", answer: "y = C1*cos(3x) + C2*sin(3x)" },
                { question: "Solve: y'' - 4y' + 4y = 0", answer: "y = (C1 + C2*x)*e^(2x)" }
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
                    content: `<h2>Trial Forms</h2>
<table>
<tr><th>g(x)</th><th>Trial Form</th></tr>
<tr><td>P_n(x)</td><td>A_n x^n + ... + A_0</td></tr>
<tr><td>e^(ax)</td><td>Ae^(ax)</td></tr>
<tr><td>sin(bx) or cos(bx)</td><td>Acos(bx) + Bsin(bx)</td></tr>
<tr><td>e^(ax)P_n(x)</td><td>e^(ax)(Ax^n + ...)</td></tr>
</table>
<p>Multiply by $x^m$ if form overlaps with homogeneous solution.</p>`
                },
                {
                    title: "Example: Undetermined Coefficients",
                    content: `<h2>Example</h2>
<p>Solve: $y'' - 3y' + 2y = 2x^2$</p>
<pre><code class="language-matlab">% Homogeneous: yh = C1*e^x + C2*e^(2x)
% Try: yp = Ax² + Bx + C
% Substitute: 2A - 6Ax - 3B + 2Ax² + 2Bx + 2C = 2x²
% A = 1, B = 3, C = 7/2
% y = C1*e^x + C2*e^(2x) + x² + 3x + 7/2</code></pre>`
                },
                {
                    title: "Variation of Parameters",
                    content: `<h2>Formula</h2>
<p>For $y'' + p(x)y' + q(x)y = g(x)$:</p>
$$y_p = -y_1\\int\\frac{y_2 g}{W}dx + y_2\\int\\frac{y_1 g}{W}dx$$
<p>where $W$ is the Wronskian.</p>
<pre><code class="language-matlab">% Example: y'' + y = sec(x)
% y1 = cos(x), y2 = sin(x), W = 1
% yp = -cos(x)∫sin(x)*sec(x)dx + sin(x)∫1*sec(x)dx
% yp = cos(x)ln|cos(x)| + x*sin(x)</code></pre>`
                }
            ],
            exercises: [
                { question: "Particular for y'' - y = x²?", answer: "Try yp = Ax² + Bx + C" },
                { question: "What if g(x) = e^x and e^x in yh?", answer: "Multiply trial by x" },
                { question: "Variation of parameters when to use?", answer: "When undetermined coefficients doesn't work" }
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
                    content: `<h2>Form</h2>
$$ax^2y'' + bxy' + cy = 0$$
<h2>Method</h2>
<p>Assume $y = x^r$, substitute:</p>
$$ar(r-1) + br + c = 0$$
<p>Solve for $r$ and form solution.</p>
<pre><code class="language-matlab">% Example: x²y'' - 2xy' + 2y = 0
% r(r-1) - 2r + 2 = 0
% r² - 3r + 2 = 0
% r = 1, 2
% y = C1*x + C2*x²</code></pre>`
                },
                {
                    title: "Cases",
                    content: `<h2>Case 1: Distinct real roots</h2>
<p>$y = C_1x^{r_1} + C_2x^{r_2}$</p>
<h2>Case 2: Repeated root</h2>
<p>$y = (C_1 + C_2\\ln x)x^r$</p>
<h2>Case 3: Complex roots</h2>
<p>$y = x^\\alpha[C_1\\cos(\\beta \\ln x) + C_2\\sin(\\beta \\ln x)]$</p>`
                }
            ],
            exercises: [
                { question: "Solve: x²y'' + xy' - y = 0", answer: "y = C1*x + C2/x" },
                { question: "Solve: x²y'' + xy' + y = 0", answer: "y = C1*cos(ln x) + C2*sin(ln x)" }
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
                    content: `<h2>Ordinary Point</h2>
<p>$x_0$ is ordinary if $p(x), q(x)$ in $y'' + p(x)y' + q(x)y = 0$ are analytic at $x_0$.</p>
<h2>Solution Form</h2>
<p>If $x_0$ is ordinary, solution is:</p>
$$y = \\sum_{n=0}^{\\infty} a_n(x-x_0)^n$$`
                },
                {
                    title: "Example: Series Solution",
                    content: `<h2>Example: y' = y</h2>
<pre><code class="language-matlab">% Assume y = Σ an x^n
% y' = Σ n*an x^(n-1) = Σ (n+1)a(n+1)x^n
% Equate: (n+1)a(n+1) = an
% a1 = a0, a2 = a0/2!, a3 = a0/3!, ...
% y = a0*e^x</code></pre>`
                },
                {
                    title: "Singular Points",
                    content: `<h2>Types of Singular Points</h2>
<ul>
<li><strong>Regular:</strong> $(x-x_0)p(x)$, $(x-x_0)^2q(x)$ analytic</li>
<li><strong>Irregular:</strong> Otherwise</li>
</ul>
<p>At regular singular points, use Frobenius method:</p>
$$y = \\sum_{n=0}^{\\infty} a_n x^{n+r}$$`
                }
            ],
            exercises: [
                { question: "Series for y'' = -y?", answer: "y = C1*cos(x) + C2*sin(x)" },
                { question: "Radius of convergence depends on?", answer: "Distance to nearest singularity" }
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
                    content: `<h2>Definition</h2>
$$\\mathcal{L}\\{f(t)\\} = F(s) = \\int_0^{\\infty} e^{-st} f(t) dt$$
<h2>Basic Transforms</h2>
<table>
<tr><th>f(t)</th><th>F(s)</th></tr>
<tr><td>1</td><td>1/s</td></tr>
<tr><td>t</td><td>1/s²</td></tr>
<tr><td>e^(at)</td><td>1/(s-a)</td></tr>
<tr><td>sin(at)</td><td>a/(s²+a²)</td></tr>
<tr><td>cos(at)</td><td>s/(s²+a²)</td></tr>
</table>`
                },
                {
                    title: "Properties",
                    content: `<h2>Key Properties</h2>
<ol>
<li><strong>Linearity:</strong> $\mathcal{L}\{af+bg\} = aF + bG$</li>
<li><strong>First Shift:</strong> $\mathcal{L}\{e^{at}f(t)\\} = F(s-a)$</li>
<li><strong>Derivative:</strong> $\mathcal{L}\{f'\} = sF - f(0)$</li>
<li><strong>Second Derivative:</strong> $\mathcal{L}\{f''\} = s^2F - sf(0) - f'(0)$</li>
</ol>`
                },
                {
                    title: "Solving IVPs",
                    content: `<h2>Method</h2>
<ol>
<li>Take Laplace transform of ODE</li>
<li>Use properties to get algebraic equation</li>
<li>Solve for Y(s)</li>
<li>Find inverse Laplace transform</li>
</ol>
<h2>Example</h2>
<p>Solve: $y' + 2y = 0$, $y(0) = 3$</p>
<pre><code class="language-matlab">% sY - y(0) + 2Y = 0
% (s+2)Y = 3
% Y = 3/(s+2)
% y = 3e^(-2t)</code></pre>`
                }
            ],
            exercises: [
                { question: "L{tan(bt)}?", answer: "b/(s²+b²) * ln(s²+b²)/s" },
                { question: "L⁻¹{1/(s-5)}?", answer: "e^(5t)" },
                { question: "Solve: y' + y = 1, y(0) = 0", answer: "y = 1 - e^(-t)" }
            ]
        }
    ]
};
