/* eslint-disable @typescript-eslint/ban-ts-comment */
export enum CodeBlockLanguages {
  apl = "apl",
  dockerfile = "dockerfile",
  handlebars = "handlebars",
  mirc = "mirc",
  pug = "pug",
  soy = "soy",
  vb = "vb",
  asciiarmor = "asciiarmor",
  dtd = "dtd",
  haskell = "haskell",
  mllike = "mllike",
  puppet = "puppet",
  sparql = "sparql",
  vbscript = "vbscript",
  "asn.1" = "asn.1",
  dylan = "dylan",
  "haskell-literate" = "haskell-literate",
  modelica = "modelica",
  python = "python",
  spreadsheet = "spreadsheet",
  velocity = "velocity",
  asterisk = "asterisk",
  ebnf = "ebnf",
  haxe = "haxe",
  mscgen = "mscgen",
  q = "q",
  sql = "sql",
  verilog = "verilog",
  brainfuck = "brainfuck",
  ecl = "ecl",
  htmlembedded = "htmlembedded",
  mumps = "mumps",
  r = "r",
  stex = "stex",
  vhdl = "vhdl",
  clike = "clike",
  eiffel = "eiffel",
  htmlmixed = "htmlmixed",
  nginx = "nginx",
  rpm = "rpm",
  stylus = "stylus",
  vue = "vue",
  clojure = "clojure",
  elm = "elm",
  http = "http",
  nsis = "nsis",
  rst = "rst",
  swift = "swift",
  wast = "wast",
  cmake = "cmake",
  erlang = "erlang",
  idl = "idl",
  ntriples = "ntriples",
  ruby = "ruby",
  tcl = "tcl",
  webidl = "webidl",
  cobol = "cobol",
  factor = "factor",
  javascript = "javascript",
  octave = "octave",
  rust = "rust",
  textile = "textile",
  xml = "xml",
  coffeescript = "coffeescript",
  fcl = "fcl",
  jinja2 = "jinja2",
  oz = "oz",
  sas = "sas",
  tiddlywiki = "tiddlywiki",
  xquery = "xquery",
  commonlisp = "commonlisp",
  forth = "forth",
  jsx = "jsx",
  pascal = "pascal",
  sass = "sass",
  tiki = "tiki",
  yacas = "yacas",
  crystal = "crystal",
  fortran = "fortran",
  julia = "julia",
  pegjs = "pegjs",
  scheme = "scheme",
  toml = "toml",
  yaml = "yaml",
  css = "css",
  gas = "gas",
  livescript = "livescript",
  perl = "perl",
  shell = "shell",
  tornado = "tornado",
  "yaml-frontmatter" = "yaml-frontmatter",
  cypher = "cypher",
  gfm = "gfm",
  lua = "lua",
  php = "php",
  sieve = "sieve",
  troff = "troff",
  z80 = "z80",
  d = "d",
  gherkin = "gherkin",
  markdown = "markdown",
  pig = "pig",
  slim = "slim",
  ttcn = "ttcn",
  dart = "dart",
  go = "go",
  mathematica = "mathematica",
  powershell = "powershell",
  smalltalk = "smalltalk",
  "ttcn-cfg" = "ttcn-cfg",
  diff = "diff",
  groovy = "groovy",
  mbox = "mbox",
  properties = "properties",
  smarty = "smarty",
  turtle = "turtle",
  django = "django",
  haml = "haml",
  protobuf = "protobuf",
  solr = "solr",
  twig = "twig",
}

// export const languageLoaders: LanguageLoaders = {
//   [CodeBlockLanguages.apl]: () =>
//     // @ts-ignore
//     import("codemirror/mode/apl/apl"),
//   [CodeBlockLanguages.dockerfile]: () =>
//     // @ts-ignore
//     import("codemirror/mode/dockerfile/dockerfile"),
//   [CodeBlockLanguages.handlebars]: () =>
//     // @ts-ignore
//     import("codemirror/mode/handlebars/handlebars"),
//   [CodeBlockLanguages.mirc]: () =>
//     // @ts-ignore
//     import("codemirror/mode/mirc/mirc"),
//   [CodeBlockLanguages.pug]: () =>
//     // @ts-ignore
//     import("codemirror/mode/pug/pug"),
//   [CodeBlockLanguages.soy]: () =>
//     // @ts-ignore
//     import("codemirror/mode/soy/soy"),
//   [CodeBlockLanguages.vb]: () =>
//     // @ts-ignore
//     import("codemirror/mode/vb/vb"),
//   [CodeBlockLanguages.asciiarmor]: () =>
//     // @ts-ignore
//     import("codemirror/mode/asciiarmor/asciiarmor"),
//   [CodeBlockLanguages.dtd]: () =>
//     // @ts-ignore
//     import("codemirror/mode/dtd/dtd"),
//   [CodeBlockLanguages.haskell]: () =>
//     // @ts-ignore
//     import("codemirror/mode/haskell/haskell"),
//   [CodeBlockLanguages.mllike]: () =>
//     // @ts-ignore
//     import("codemirror/mode/mllike/mllike"),
//   [CodeBlockLanguages.puppet]: () =>
//     // @ts-ignore
//     import("codemirror/mode/puppet/puppet"),
//   [CodeBlockLanguages.sparql]: () =>
//     // @ts-ignore
//     import("codemirror/mode/sparql/sparql"),
//   [CodeBlockLanguages.vbscript]: () =>
//     // @ts-ignore
//     import("codemirror/mode/vbscript/vbscript"),
//   [CodeBlockLanguages["asn.1"]]: () =>
//     // @ts-ignore
//     import("codemirror/mode/asn.1/asn.1"),
//   [CodeBlockLanguages.dylan]: () =>
//     // @ts-ignore
//     import("codemirror/mode/dylan/dylan"),
//   [CodeBlockLanguages["haskell-literate"]]: () =>
//     // @ts-ignore
//     import("codemirror/mode/haskell-literate/haskell-literate"),
//   [CodeBlockLanguages.modelica]: () =>
//     // @ts-ignore
//     import("codemirror/mode/modelica/modelica"),
//   [CodeBlockLanguages.python]: () =>
//     // @ts-ignore
//     import("codemirror/mode/python/python"),
//   [CodeBlockLanguages.spreadsheet]: () =>
//     // @ts-ignore
//     import("codemirror/mode/spreadsheet/spreadsheet"),
//   [CodeBlockLanguages.velocity]: () =>
//     // @ts-ignore
//     import("codemirror/mode/velocity/velocity"),
//   [CodeBlockLanguages.asterisk]: () =>
//     // @ts-ignore
//     import("codemirror/mode/asterisk/asterisk"),
//   [CodeBlockLanguages.ebnf]: () =>
//     // @ts-ignore
//     import("codemirror/mode/ebnf/ebnf"),
//   [CodeBlockLanguages.haxe]: () =>
//     // @ts-ignore
//     import("codemirror/mode/haxe/haxe"),
//   [CodeBlockLanguages.mscgen]: () =>
//     // @ts-ignore
//     import("codemirror/mode/mscgen/mscgen"),
//   [CodeBlockLanguages.q]: () =>
//     // @ts-ignore
//     import("codemirror/mode/q/q"),
//   [CodeBlockLanguages.sql]: () =>
//     // @ts-ignore
//     import("codemirror/mode/sql/sql"),
//   [CodeBlockLanguages.verilog]: () =>
//     // @ts-ignore
//     import("codemirror/mode/verilog/verilog"),
//   [CodeBlockLanguages.brainfuck]: () =>
//     // @ts-ignore
//     import("codemirror/mode/brainfuck/brainfuck"),
//   [CodeBlockLanguages.ecl]: () =>
//     // @ts-ignore
//     import("codemirror/mode/ecl/ecl"),
//   [CodeBlockLanguages.htmlembedded]: () =>
//     // @ts-ignore
//     import("codemirror/mode/htmlembedded/htmlembedded"),
//   [CodeBlockLanguages.mumps]: () =>
//     // @ts-ignore
//     import("codemirror/mode/mumps/mumps"),
//   [CodeBlockLanguages.r]: () =>
//     // @ts-ignore
//     import("codemirror/mode/r/r"),
//   [CodeBlockLanguages.stex]: () =>
//     // @ts-ignore
//     import("codemirror/mode/stex/stex"),
//   [CodeBlockLanguages.vhdl]: () =>
//     // @ts-ignore
//     import("codemirror/mode/vhdl/vhdl"),
//   [CodeBlockLanguages.clike]: () =>
//     // @ts-ignore
//     import("codemirror/mode/clike/clike"),
//   [CodeBlockLanguages.eiffel]: () =>
//     // @ts-ignore
//     import("codemirror/mode/eiffel/eiffel"),
//   [CodeBlockLanguages.htmlmixed]: () =>
//     // @ts-ignore
//     import("codemirror/mode/htmlmixed/htmlmixed"),
//   [CodeBlockLanguages.nginx]: () =>
//     // @ts-ignore
//     import("codemirror/mode/nginx/nginx"),
//   [CodeBlockLanguages.rpm]: () =>
//     // @ts-ignore
//     import("codemirror/mode/rpm/rpm"),
//   [CodeBlockLanguages.stylus]: () =>
//     // @ts-ignore
//     import("codemirror/mode/stylus/stylus"),
//   [CodeBlockLanguages.vue]: () =>
//     // @ts-ignore
//     import("codemirror/mode/vue/vue"),
//   [CodeBlockLanguages.clojure]: () =>
//     // @ts-ignore
//     import("codemirror/mode/clojure/clojure"),
//   [CodeBlockLanguages.elm]: () =>
//     // @ts-ignore
//     import("codemirror/mode/elm/elm"),
//   [CodeBlockLanguages.http]: () =>
//     // @ts-ignore
//     import("codemirror/mode/http/http"),
//   [CodeBlockLanguages.nsis]: () =>
//     // @ts-ignore
//     import("codemirror/mode/nsis/nsis"),
//   [CodeBlockLanguages.rst]: () =>
//     // @ts-ignore
//     import("codemirror/mode/rst/rst"),
//   [CodeBlockLanguages.swift]: () =>
//     // @ts-ignore
//     import("codemirror/mode/swift/swift"),
//   [CodeBlockLanguages.wast]: () =>
//     // @ts-ignore
//     import("codemirror/mode/wast/wast"),
//   [CodeBlockLanguages.cmake]: () =>
//     // @ts-ignore
//     import("codemirror/mode/cmake/cmake"),
//   [CodeBlockLanguages.erlang]: () =>
//     // @ts-ignore
//     import("codemirror/mode/erlang/erlang"),
//   [CodeBlockLanguages.idl]: () =>
//     // @ts-ignore
//     import("codemirror/mode/idl/idl"),
//   [CodeBlockLanguages.ntriples]: () =>
//     // @ts-ignore
//     import("codemirror/mode/ntriples/ntriples"),
//   [CodeBlockLanguages.ruby]: () =>
//     // @ts-ignore
//     import("codemirror/mode/ruby/ruby"),
//   [CodeBlockLanguages.tcl]: () =>
//     // @ts-ignore
//     import("codemirror/mode/tcl/tcl"),
//   [CodeBlockLanguages.webidl]: () =>
//     // @ts-ignore
//     import("codemirror/mode/webidl/webidl"),
//   [CodeBlockLanguages.cobol]: () =>
//     // @ts-ignore
//     import("codemirror/mode/cobol/cobol"),
//   [CodeBlockLanguages.factor]: () =>
//     // @ts-ignore
//     import("codemirror/mode/factor/factor"),
//   [CodeBlockLanguages.javascript]: () =>
//     // @ts-ignore
//     import("codemirror/mode/javascript/javascript"),
//   [CodeBlockLanguages.octave]: () =>
//     // @ts-ignore
//     import("codemirror/mode/octave/octave"),
//   [CodeBlockLanguages.rust]: () =>
//     // @ts-ignore
//     import("codemirror/mode/rust/rust"),
//   [CodeBlockLanguages.textile]: () =>
//     // @ts-ignore
//     import("codemirror/mode/textile/textile"),
//   [CodeBlockLanguages.xml]: () =>
//     // @ts-ignore
//     import("codemirror/mode/xml/xml"),
//   [CodeBlockLanguages.coffeescript]: () =>
//     // @ts-ignore
//     import("codemirror/mode/coffeescript/coffeescript"),
//   [CodeBlockLanguages.fcl]: () =>
//     // @ts-ignore
//     import("codemirror/mode/fcl/fcl"),
//   [CodeBlockLanguages.jinja2]: () =>
//     // @ts-ignore
//     import("codemirror/mode/jinja2/jinja2"),
//   [CodeBlockLanguages.oz]: () =>
//     // @ts-ignore
//     import("codemirror/mode/oz/oz"),
//   [CodeBlockLanguages.sas]: () =>
//     // @ts-ignore
//     import("codemirror/mode/sas/sas"),
//   [CodeBlockLanguages.tiddlywiki]: () =>
//     // @ts-ignore
//     import("codemirror/mode/tiddlywiki/tiddlywiki"),
//   [CodeBlockLanguages.xquery]: () =>
//     // @ts-ignore
//     import("codemirror/mode/xquery/xquery"),
//   [CodeBlockLanguages.commonlisp]: () =>
//     // @ts-ignore
//     import("codemirror/mode/commonlisp/commonlisp"),
//   [CodeBlockLanguages.forth]: () =>
//     // @ts-ignore
//     import("codemirror/mode/forth/forth"),
//   [CodeBlockLanguages.jsx]: () =>
//     // @ts-ignore
//     import("codemirror/mode/jsx/jsx"),
//   [CodeBlockLanguages.pascal]: () =>
//     // @ts-ignore
//     import("codemirror/mode/pascal/pascal"),
//   [CodeBlockLanguages.sass]: () =>
//     // @ts-ignore
//     import("codemirror/mode/sass/sass"),
//   [CodeBlockLanguages.tiki]: () =>
//     // @ts-ignore
//     import("codemirror/mode/tiki/tiki"),
//   [CodeBlockLanguages.yacas]: () =>
//     // @ts-ignore
//     import("codemirror/mode/yacas/yacas"),
//   [CodeBlockLanguages.crystal]: () =>
//     // @ts-ignore
//     import("codemirror/mode/crystal/crystal"),
//   [CodeBlockLanguages.fortran]: () =>
//     // @ts-ignore
//     import("codemirror/mode/fortran/fortran"),
//   [CodeBlockLanguages.julia]: () =>
//     // @ts-ignore
//     import("codemirror/mode/julia/julia"),
//   [CodeBlockLanguages.pegjs]: () =>
//     // @ts-ignore
//     import("codemirror/mode/pegjs/pegjs"),
//   [CodeBlockLanguages.scheme]: () =>
//     // @ts-ignore
//     import("codemirror/mode/scheme/scheme"),
//   [CodeBlockLanguages.toml]: () =>
//     // @ts-ignore
//     import("codemirror/mode/toml/toml"),
//   [CodeBlockLanguages.yaml]: () =>
//     // @ts-ignore
//     import("codemirror/mode/yaml/yaml"),
//   [CodeBlockLanguages.css]: () =>
//     // @ts-ignore
//     import("codemirror/mode/css/css"),
//   [CodeBlockLanguages.gas]: () =>
//     // @ts-ignore
//     import("codemirror/mode/gas/gas"),
//   [CodeBlockLanguages.livescript]: () =>
//     // @ts-ignore
//     import("codemirror/mode/livescript/livescript"),
//   [CodeBlockLanguages.perl]: () =>
//     // @ts-ignore
//     import("codemirror/mode/perl/perl"),
//   [CodeBlockLanguages.shell]: () =>
//     // @ts-ignore
//     import("codemirror/mode/shell/shell"),
//   [CodeBlockLanguages.tornado]: () =>
//     // @ts-ignore
//     import("codemirror/mode/tornado/tornado"),
//   [CodeBlockLanguages["yaml-frontmatter"]]: () =>
//     // @ts-ignore
//     import("codemirror/mode/yaml-frontmatter/yaml-frontmatter"),
//   [CodeBlockLanguages.cypher]: () =>
//     // @ts-ignore
//     import("codemirror/mode/cypher/cypher"),
//   [CodeBlockLanguages.gfm]: () =>
//     // @ts-ignore
//     import("codemirror/mode/gfm/gfm"),
//   [CodeBlockLanguages.lua]: () =>
//     // @ts-ignore
//     import("codemirror/mode/lua/lua"),
//   [CodeBlockLanguages.php]: () =>
//     // @ts-ignore
//     import("codemirror/mode/php/php"),
//   [CodeBlockLanguages.sieve]: () =>
//     // @ts-ignore
//     import("codemirror/mode/sieve/sieve"),
//   [CodeBlockLanguages.troff]: () =>
//     // @ts-ignore
//     import("codemirror/mode/troff/troff"),
//   [CodeBlockLanguages.z80]: () =>
//     // @ts-ignore
//     import("codemirror/mode/z80/z80"),
//   [CodeBlockLanguages.d]: () =>
//     // @ts-ignore
//     import("codemirror/mode/d/d"),
//   [CodeBlockLanguages.gherkin]: () =>
//     // @ts-ignore
//     import("codemirror/mode/gherkin/gherkin"),
//   [CodeBlockLanguages.markdown]: () =>
//     // @ts-ignore
//     import("codemirror/mode/markdown/markdown"),
//   [CodeBlockLanguages.pig]: () =>
//     // @ts-ignore
//     import("codemirror/mode/pig/pig"),
//   [CodeBlockLanguages.slim]: () =>
//     // @ts-ignore
//     import("codemirror/mode/slim/slim"),
//   [CodeBlockLanguages.ttcn]: () =>
//     // @ts-ignore
//     import("codemirror/mode/ttcn/ttcn"),
//   [CodeBlockLanguages.dart]: () =>
//     // @ts-ignore
//     import("codemirror/mode/dart/dart"),
//   [CodeBlockLanguages.go]: () =>
//     // @ts-ignore
//     import("codemirror/mode/go/go"),
//   [CodeBlockLanguages.mathematica]: () =>
//     // @ts-ignore
//     import("codemirror/mode/mathematica/mathematica"),
//   [CodeBlockLanguages.powershell]: () =>
//     // @ts-ignore
//     import("codemirror/mode/powershell/powershell"),
//   [CodeBlockLanguages.smalltalk]: () =>
//     // @ts-ignore
//     import("codemirror/mode/smalltalk/smalltalk"),
//   [CodeBlockLanguages["ttcn-cfg"]]: () =>
//     // @ts-ignore
//     import("codemirror/mode/ttcn-cfg/ttcn-cfg"),
//   [CodeBlockLanguages.diff]: () =>
//     // @ts-ignore
//     import("codemirror/mode/diff/diff"),
//   [CodeBlockLanguages.groovy]: () =>
//     // @ts-ignore
//     import("codemirror/mode/groovy/groovy"),
//   [CodeBlockLanguages.mbox]: () =>
//     // @ts-ignore
//     import("codemirror/mode/mbox/mbox"),
//   [CodeBlockLanguages.properties]: () =>
//     // @ts-ignore
//     import("codemirror/mode/properties/properties"),
//   [CodeBlockLanguages.smarty]: () =>
//     // @ts-ignore
//     import("codemirror/mode/smarty/smarty"),
//   [CodeBlockLanguages.turtle]: () =>
//     // @ts-ignore
//     import("codemirror/mode/turtle/turtle"),
//   [CodeBlockLanguages.django]: () =>
//     // @ts-ignore
//     import("codemirror/mode/django/django"),
//   [CodeBlockLanguages.haml]: () =>
//     // @ts-ignore
//     import("codemirror/mode/haml/haml"),
//   [CodeBlockLanguages.protobuf]: () =>
//     // @ts-ignore
//     import("codemirror/mode/protobuf/protobuf"),
//   [CodeBlockLanguages.solr]: () =>
//     // @ts-ignore
//     import("codemirror/mode/solr/solr"),
//   [CodeBlockLanguages.twig]: () =>
//     // @ts-ignore
//     import("codemirror/mode/twig/twig"),
// };
