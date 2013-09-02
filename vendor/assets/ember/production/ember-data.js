// Fetched from: http://builds.emberjs.com/ember-data-latest.min.js
// Fetched on: 2013-09-02T18:30:33Z
// ==========================================================================
// Project:   Ember Data
// Copyright: ©2011-2012 Tilde Inc. and contributors.
//            Portions ©2011 Living Social Inc. and contributors.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================



// Version: v1.0.0-beta.1-20-g9596a48
// Last commit: 9596a48 (2013-09-01 17:51:52 -0700)


!function(){var e,i;!function(){var r={},s={};e=function(e,i,s){r[e]={deps:i,callback:s}},i=function(e){if(s[e])return s[e];s[e]={};var n,t,u,o,a;if(n=r[e],!n)throw new Error("Module '"+e+"' not found.");t=n.deps,u=n.callback,o=[];for(var l=0,$=t.length;$>l;l++)"exports"===t[l]?o.push(a={}):o.push(i(t[l]));var c=u.apply(this,o);return s[e]=a||c}}(),function(){Ember.String.pluralize=function(e){return Ember.Inflector.inflector.pluralize(e)},Ember.String.singularize=function(e){return Ember.Inflector.inflector.singularize(e)}}(),function(){function e(e,i){for(var r=0,s=i.length;s>r;r++)e.uncountable[i[r]]=!0}function i(e,i){for(var r,s=0,n=i.length;n>s;s++)r=i[s],e.irregular[r[0]]=r[1],e.irregularInverse[r[1]]=r[0]}function r(r){r=r||{},r.uncountable=r.uncountable||{},r.irregularPairs=r.irregularPairs||{};var s=this.rules={plurals:r.plurals||[],singular:r.singular||[],irregular:{},irregularInverse:{},uncountable:{}};e(s,r.uncountable),i(s,r.irregularPairs)}var s=/^\s*$/;r.prototype={pluralize:function(e){return this.inflect(e,this.rules.plurals)},singularize:function(e){return this.inflect(e,this.rules.singular)},inflect:function(e,i){var r,n,t,u,o,a,l,$,c;if(o=s.test(e))return e;if(u=e.toLowerCase(),a=this.rules.uncountable[u])return e;if(l=this.rules.irregular[u])return l;if($=this.rules.irregularInverse[u])return $;for(var f=i.length,p=0;f>p&&(r=i[f-1],c=r[0],!c.test(e));f--);return r=r||[],c=r[0],n=r[1],t=e.replace(c,n)}},Ember.Inflector=r}(),function(){Ember.Inflector.defaultRules={plurals:[[/$/,"s"],[/s$/i,"s"],[/^(ax|test)is$/i,"$1es"],[/(octop|vir)us$/i,"$1i"],[/(octop|vir)i$/i,"$1i"],[/(alias|status)$/i,"$1es"],[/(bu)s$/i,"$1ses"],[/(buffal|tomat)o$/i,"$1oes"],[/([ti])um$/i,"$1a"],[/([ti])a$/i,"$1a"],[/sis$/i,"ses"],[/(?:([^f])fe|([lr])f)$/i,"$1$2ves"],[/(hive)$/i,"$1s"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/(x|ch|ss|sh)$/i,"$1es"],[/(matr|vert|ind)(?:ix|ex)$/i,"$1ices"],[/^(m|l)ouse$/i,"$1ice"],[/^(m|l)ice$/i,"$1ice"],[/^(ox)$/i,"$1en"],[/^(oxen)$/i,"$1"],[/(quiz)$/i,"$1zes"]],singular:[[/s$/i,""],[/(ss)$/i,"$1"],[/(n)ews$/i,"$1ews"],[/([ti])a$/i,"$1um"],[/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i,"$1sis"],[/(^analy)(sis|ses)$/i,"$1sis"],[/([^f])ves$/i,"$1fe"],[/(hive)s$/i,"$1"],[/(tive)s$/i,"$1"],[/([lr])ves$/i,"$1f"],[/([^aeiouy]|qu)ies$/i,"$1y"],[/(s)eries$/i,"$1eries"],[/(m)ovies$/i,"$1ovie"],[/(x|ch|ss|sh)es$/i,"$1"],[/^(m|l)ice$/i,"$1ouse"],[/(bus)(es)?$/i,"$1"],[/(o)es$/i,"$1"],[/(shoe)s$/i,"$1"],[/(cris|test)(is|es)$/i,"$1is"],[/^(a)x[ie]s$/i,"$1xis"],[/(octop|vir)(us|i)$/i,"$1us"],[/(alias|status)(es)?$/i,"$1"],[/^(ox)en/i,"$1"],[/(vert|ind)ices$/i,"$1ex"],[/(matr)ices$/i,"$1ix"],[/(quiz)zes$/i,"$1"],[/(database)s$/i,"$1"]],irregularPairs:[["person","people"],["man","men"],["child","children"],["sex","sexes"],["move","moves"],["cow","kine"],["zombie","zombies"]],uncountable:["equipment","information","rice","money","species","series","fish","sheep","jeans","police"]}}(),function(){Ember.EXTEND_PROTOTYPES&&(String.prototype.pluralize=function(){return Ember.String.pluralize(this)},String.prototype.singularize=function(){return Ember.String.singularize(this)})}(),function(){Ember.Inflector.inflector=new Ember.Inflector(Ember.Inflector.defaultRules)}()}(),"undefined"==typeof location||"localhost"!==location.hostname&&"127.0.0.1"!==location.hostname||Ember.Logger.warn("You are running a production build of Ember on localhost and won't receive detailed error messages. If you want full error messages please use the non-minified build provided on the Ember website.");
