function Expr() {
    this.type = 'EXPRESSION';
}

Expr.prototype.constructor = Expr();
Expr.prototype.eval = function () {
};



function Literal(a) {   
    this.val = a;

}

Literal.prototype = Object.create(Expr.prototype);
Literal.prototype.constructor = Literal;
Literal.prototype.eval = function (){
    return this.val;
};


function Unary(op, a){
    Expr.call(this);
    this.operator = op;
    this.right = a;
}

Unary.prototype = Object.create(Expr.prototype);
Unary.prototype.constructor = Unary;
Unary.prototype.eval = function () {
    switch(this.operator){
        case '--':
            return this.right.eval() - 1;
        case '++':
            return this.right.eval() + 1;
        case '!':
            return !this.right.eval();
    }
    
}

function BinaryExpr(a, op, b){
    Expr.call(this);
    this.left = a;
    this.operator = op;
    this.right = b;
    
}

BinaryExpr.prototype = Object.create(Expr.prototype);
BinaryExpr.prototype.constructor = BinaryExpr;
BinaryExpr.prototype.eval = function () {
    switch(this.operator){
        case '+':
            return this.left.eval() + this.right.eval();
        case '-':
            return this.left.eval() - this.right.eval();
        case '*':
            return this.left.eval() * this.right.eval();
        case '/':
            return this.left.eval() / this.right.eval();
        case '%':
            return this.left.eval() % this.right.eval();   
        case '==':
            return this.left.eval() == this.right.eval();
        case '!=':
            return this.left.eval() != this.right.eval();
    }
};
