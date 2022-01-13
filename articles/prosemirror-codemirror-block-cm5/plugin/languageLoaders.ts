// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { CodeBlockLanguages } from "./languages";
import { LanguageLoaders } from "./types";

const languageLoaders: LanguageLoaders = {
  [CodeBlockLanguages.apl]: () => import("codemirror/mode/apl/apl"),
  [CodeBlockLanguages.dockerfile]: () =>
    import("codemirror/mode/dockerfile/dockerfile"),
  [CodeBlockLanguages.handlebars]: () =>
    import("codemirror/mode/handlebars/handlebars"),
  [CodeBlockLanguages.mirc]: () => import("codemirror/mode/mirc/mirc"),
  [CodeBlockLanguages.pug]: () => import("codemirror/mode/pug/pug"),
  [CodeBlockLanguages.soy]: () => import("codemirror/mode/soy/soy"),
  [CodeBlockLanguages.vb]: () => import("codemirror/mode/vb/vb"),
  [CodeBlockLanguages.asciiarmor]: () =>
    import("codemirror/mode/asciiarmor/asciiarmor"),
  [CodeBlockLanguages.dtd]: () => import("codemirror/mode/dtd/dtd"),
  [CodeBlockLanguages.haskell]: () => import("codemirror/mode/haskell/haskell"),
  [CodeBlockLanguages.mllike]: () => import("codemirror/mode/mllike/mllike"),
  [CodeBlockLanguages.puppet]: () => import("codemirror/mode/puppet/puppet"),
  [CodeBlockLanguages.sparql]: () => import("codemirror/mode/sparql/sparql"),
  [CodeBlockLanguages.vbscript]: () =>
    import("codemirror/mode/vbscript/vbscript"),
  [CodeBlockLanguages["asn.1"]]: () => import("codemirror/mode/asn.1/asn.1"),
  [CodeBlockLanguages.dylan]: () => import("codemirror/mode/dylan/dylan"),
  [CodeBlockLanguages["haskell-literate"]]: () =>
    import("codemirror/mode/haskell-literate/haskell-literate"),
  [CodeBlockLanguages.modelica]: () =>
    import("codemirror/mode/modelica/modelica"),
  [CodeBlockLanguages.python]: () => import("codemirror/mode/python/python"),
  [CodeBlockLanguages.spreadsheet]: () =>
    import("codemirror/mode/spreadsheet/spreadsheet"),
  [CodeBlockLanguages.velocity]: () =>
    import("codemirror/mode/velocity/velocity"),
  [CodeBlockLanguages.asterisk]: () =>
    import("codemirror/mode/asterisk/asterisk"),
  [CodeBlockLanguages.ebnf]: () => import("codemirror/mode/ebnf/ebnf"),
  [CodeBlockLanguages.haxe]: () => import("codemirror/mode/haxe/haxe"),
  [CodeBlockLanguages.mscgen]: () => import("codemirror/mode/mscgen/mscgen"),
  [CodeBlockLanguages.q]: () => import("codemirror/mode/q/q"),
  [CodeBlockLanguages.sql]: () => import("codemirror/mode/sql/sql"),
  [CodeBlockLanguages.verilog]: () => import("codemirror/mode/verilog/verilog"),
  [CodeBlockLanguages.brainfuck]: () =>
    import("codemirror/mode/brainfuck/brainfuck"),
  [CodeBlockLanguages.ecl]: () => import("codemirror/mode/ecl/ecl"),
  [CodeBlockLanguages.htmlembedded]: () =>
    import("codemirror/mode/htmlembedded/htmlembedded"),
  [CodeBlockLanguages.mumps]: () => import("codemirror/mode/mumps/mumps"),
  [CodeBlockLanguages.r]: () => import("codemirror/mode/r/r"),
  [CodeBlockLanguages.stex]: () => import("codemirror/mode/stex/stex"),
  [CodeBlockLanguages.vhdl]: () => import("codemirror/mode/vhdl/vhdl"),
  [CodeBlockLanguages.clike]: () => import("codemirror/mode/clike/clike"),
  [CodeBlockLanguages.eiffel]: () => import("codemirror/mode/eiffel/eiffel"),
  [CodeBlockLanguages.htmlmixed]: () =>
    import("codemirror/mode/htmlmixed/htmlmixed"),
  [CodeBlockLanguages.nginx]: () => import("codemirror/mode/nginx/nginx"),
  [CodeBlockLanguages.rpm]: () => import("codemirror/mode/rpm/rpm"),
  [CodeBlockLanguages.stylus]: () => import("codemirror/mode/stylus/stylus"),
  [CodeBlockLanguages.vue]: () => import("codemirror/mode/vue/vue"),
  [CodeBlockLanguages.clojure]: () => import("codemirror/mode/clojure/clojure"),
  [CodeBlockLanguages.elm]: () => import("codemirror/mode/elm/elm"),
  [CodeBlockLanguages.http]: () => import("codemirror/mode/http/http"),
  [CodeBlockLanguages.nsis]: () => import("codemirror/mode/nsis/nsis"),
  [CodeBlockLanguages.rst]: () => import("codemirror/mode/rst/rst"),
  [CodeBlockLanguages.swift]: () => import("codemirror/mode/swift/swift"),
  [CodeBlockLanguages.wast]: () => import("codemirror/mode/wast/wast"),
  [CodeBlockLanguages.cmake]: () => import("codemirror/mode/cmake/cmake"),
  [CodeBlockLanguages.erlang]: () => import("codemirror/mode/erlang/erlang"),
  [CodeBlockLanguages.idl]: () => import("codemirror/mode/idl/idl"),
  [CodeBlockLanguages.ntriples]: () =>
    import("codemirror/mode/ntriples/ntriples"),
  [CodeBlockLanguages.ruby]: () => import("codemirror/mode/ruby/ruby"),
  [CodeBlockLanguages.tcl]: () => import("codemirror/mode/tcl/tcl"),
  [CodeBlockLanguages.webidl]: () => import("codemirror/mode/webidl/webidl"),
  [CodeBlockLanguages.cobol]: () => import("codemirror/mode/cobol/cobol"),
  [CodeBlockLanguages.factor]: () => import("codemirror/mode/factor/factor"),
  [CodeBlockLanguages.javascript]: () =>
    import("codemirror/mode/javascript/javascript"),
  [CodeBlockLanguages.octave]: () => import("codemirror/mode/octave/octave"),
  [CodeBlockLanguages.rust]: () => import("codemirror/mode/rust/rust"),
  [CodeBlockLanguages.textile]: () => import("codemirror/mode/textile/textile"),
  [CodeBlockLanguages.xml]: () => import("codemirror/mode/xml/xml"),
  [CodeBlockLanguages.coffeescript]: () =>
    import("codemirror/mode/coffeescript/coffeescript"),
  [CodeBlockLanguages.fcl]: () => import("codemirror/mode/fcl/fcl"),
  [CodeBlockLanguages.jinja2]: () => import("codemirror/mode/jinja2/jinja2"),
  [CodeBlockLanguages.oz]: () => import("codemirror/mode/oz/oz"),
  [CodeBlockLanguages.sas]: () => import("codemirror/mode/sas/sas"),
  [CodeBlockLanguages.tiddlywiki]: () =>
    import("codemirror/mode/tiddlywiki/tiddlywiki"),
  [CodeBlockLanguages.xquery]: () => import("codemirror/mode/xquery/xquery"),
  [CodeBlockLanguages.commonlisp]: () =>
    import("codemirror/mode/commonlisp/commonlisp"),
  [CodeBlockLanguages.forth]: () => import("codemirror/mode/forth/forth"),
  [CodeBlockLanguages.jsx]: () => import("codemirror/mode/jsx/jsx"),
  [CodeBlockLanguages.pascal]: () => import("codemirror/mode/pascal/pascal"),
  [CodeBlockLanguages.sass]: () => import("codemirror/mode/sass/sass"),
  [CodeBlockLanguages.tiki]: () => import("codemirror/mode/tiki/tiki"),
  [CodeBlockLanguages.yacas]: () => import("codemirror/mode/yacas/yacas"),
  [CodeBlockLanguages.crystal]: () => import("codemirror/mode/crystal/crystal"),
  [CodeBlockLanguages.fortran]: () => import("codemirror/mode/fortran/fortran"),
  [CodeBlockLanguages.julia]: () => import("codemirror/mode/julia/julia"),
  [CodeBlockLanguages.pegjs]: () => import("codemirror/mode/pegjs/pegjs"),
  [CodeBlockLanguages.scheme]: () => import("codemirror/mode/scheme/scheme"),
  [CodeBlockLanguages.toml]: () => import("codemirror/mode/toml/toml"),
  [CodeBlockLanguages.yaml]: () => import("codemirror/mode/yaml/yaml"),
  [CodeBlockLanguages.css]: () => import("codemirror/mode/css/css"),
  [CodeBlockLanguages.gas]: () => import("codemirror/mode/gas/gas"),
  [CodeBlockLanguages.livescript]: () =>
    import("codemirror/mode/livescript/livescript"),
  [CodeBlockLanguages.perl]: () => import("codemirror/mode/perl/perl"),
  [CodeBlockLanguages.shell]: () => import("codemirror/mode/shell/shell"),
  [CodeBlockLanguages.tornado]: () => import("codemirror/mode/tornado/tornado"),
  [CodeBlockLanguages["yaml-frontmatter"]]: () =>
    import("codemirror/mode/yaml-frontmatter/yaml-frontmatter"),
  [CodeBlockLanguages.cypher]: () => import("codemirror/mode/cypher/cypher"),
  [CodeBlockLanguages.gfm]: () => import("codemirror/mode/gfm/gfm"),
  [CodeBlockLanguages.lua]: () => import("codemirror/mode/lua/lua"),
  [CodeBlockLanguages.php]: () => import("codemirror/mode/php/php"),
  [CodeBlockLanguages.sieve]: () => import("codemirror/mode/sieve/sieve"),
  [CodeBlockLanguages.troff]: () => import("codemirror/mode/troff/troff"),
  [CodeBlockLanguages.z80]: () => import("codemirror/mode/z80/z80"),
  [CodeBlockLanguages.d]: () => import("codemirror/mode/d/d"),
  [CodeBlockLanguages.gherkin]: () => import("codemirror/mode/gherkin/gherkin"),
  [CodeBlockLanguages.markdown]: () =>
    import("codemirror/mode/markdown/markdown"),
  [CodeBlockLanguages.pig]: () => import("codemirror/mode/pig/pig"),
  [CodeBlockLanguages.slim]: () => import("codemirror/mode/slim/slim"),
  [CodeBlockLanguages.ttcn]: () => import("codemirror/mode/ttcn/ttcn"),
  [CodeBlockLanguages.dart]: () => import("codemirror/mode/dart/dart"),
  [CodeBlockLanguages.go]: () => import("codemirror/mode/go/go"),
  [CodeBlockLanguages.mathematica]: () =>
    import("codemirror/mode/mathematica/mathematica"),
  [CodeBlockLanguages.powershell]: () =>
    import("codemirror/mode/powershell/powershell"),
  [CodeBlockLanguages.smalltalk]: () =>
    import("codemirror/mode/smalltalk/smalltalk"),
  [CodeBlockLanguages["ttcn-cfg"]]: () =>
    import("codemirror/mode/ttcn-cfg/ttcn-cfg"),
  [CodeBlockLanguages.diff]: () => import("codemirror/mode/diff/diff"),
  [CodeBlockLanguages.groovy]: () => import("codemirror/mode/groovy/groovy"),
  [CodeBlockLanguages.mbox]: () => import("codemirror/mode/mbox/mbox"),
  [CodeBlockLanguages.properties]: () =>
    import("codemirror/mode/properties/properties"),
  [CodeBlockLanguages.smarty]: () => import("codemirror/mode/smarty/smarty"),
  [CodeBlockLanguages.turtle]: () => import("codemirror/mode/turtle/turtle"),
  [CodeBlockLanguages.django]: () => import("codemirror/mode/django/django"),
  [CodeBlockLanguages.haml]: () => import("codemirror/mode/haml/haml"),
  [CodeBlockLanguages.protobuf]: () =>
    import("codemirror/mode/protobuf/protobuf"),
  [CodeBlockLanguages.solr]: () => import("codemirror/mode/solr/solr"),
  [CodeBlockLanguages.twig]: () => import("codemirror/mode/twig/twig"),
};

export default languageLoaders;
