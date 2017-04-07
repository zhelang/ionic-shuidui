var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import * as jsSHA from "jssha";
/*
  Generated class for the TwitterUtils provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var TwitterUtils = (function () {
    function TwitterUtils(http) {
        this.http = http;
    }
    TwitterUtils.prototype.configureUtils = function (cK, cS, oK, oS) {
        this.consumerKey = cK;
        this.consumerSecret = cS;
        this.oauthKey = oK;
        this.oauthSecret = oS;
    };
    TwitterUtils.prototype.performGetRequest = function (url, neededParams, optionalParams) {
        if (typeof (optionalParams) === 'undefined')
            optionalParams = {};
        if (typeof (neededParams) === 'undefined')
            neededParams = {};
        var parameters = Object.assign(optionalParams, neededParams);
        var signature = this.createTwitterSignature('GET', url, parameters, this.consumerKey, this.consumerSecret, this.oauthKey, this.oauthSecret);
        var headers = new Headers({ 'Accept': 'application/json' });
        headers.append('Authorization', signature['authorization_header']);
        var params = new URLSearchParams();
        for (var key in parameters) {
            params.set(key, parameters[key]);
        }
        return this.http.get(url, { search: params, headers: headers })
            .map(function (response) { return response.json(); });
    };
    TwitterUtils.prototype.performPostRequest = function (url, neededParams, optionalParams) {
        if (typeof (optionalParams) === 'undefined')
            optionalParams = {};
        if (typeof (neededParams) === 'undefined')
            neededParams = {};
        var parameters = Object.assign(optionalParams, neededParams);
        var signature = this.createTwitterSignature('POST', url, parameters, this.consumerKey, this.consumerSecret, this.oauthKey, this.oauthSecret);
        if (parameters !== {})
            url = url + '?' + this.transformRequest(parameters);
        var headers = new Headers({ 'Accept': 'application/json' });
        headers.append('Authorization', signature['authorization_header']);
        var options = new RequestOptions({ headers: headers });
        return this.http.post(url, parameters, options)
            .map(function (response) { return response.json(); });
    };
    TwitterUtils.prototype.createSignature = function (method, endPoint, headerParameters, bodyParameters, secretKey, tokenSecret) {
        if (typeof jsSHA !== "undefined") {
            var headerAndBodyParameters = Object.assign({}, headerParameters);
            var bodyParameterKeys = Object.keys(bodyParameters);
            for (var i = 0; i < bodyParameterKeys.length; i++) {
                headerAndBodyParameters[bodyParameterKeys[i]] = this.escapeSpecialCharacters(bodyParameters[bodyParameterKeys[i]]);
            }
            var signatureBaseString = method + "&" + encodeURIComponent(endPoint) + "&";
            var headerAndBodyParameterKeys = (Object.keys(headerAndBodyParameters)).sort();
            for (i = 0; i < headerAndBodyParameterKeys.length; i++) {
                if (i == headerAndBodyParameterKeys.length - 1) {
                    signatureBaseString += encodeURIComponent(headerAndBodyParameterKeys[i] + "=" + headerAndBodyParameters[headerAndBodyParameterKeys[i]]);
                }
                else {
                    signatureBaseString += encodeURIComponent(headerAndBodyParameterKeys[i] + "=" + headerAndBodyParameters[headerAndBodyParameterKeys[i]] + "&");
                }
            }
            var oauthSignatureObject = new jsSHA(signatureBaseString, "TEXT");
            var encodedTokenSecret = '';
            if (tokenSecret) {
                encodedTokenSecret = encodeURIComponent(tokenSecret);
            }
            headerParameters.oauth_signature = encodeURIComponent(oauthSignatureObject.getHMAC(encodeURIComponent(secretKey) + "&" + encodedTokenSecret, ["TEXT", "SHA-1", "B64"]));
            var headerParameterKeys = Object.keys(headerParameters);
            var authorizationHeader = 'OAuth ';
            for (i = 0; i < headerParameterKeys.length; i++) {
                if (i == headerParameterKeys.length - 1) {
                    authorizationHeader += headerParameterKeys[i] + '="' + headerParameters[headerParameterKeys[i]] + '"';
                }
                else {
                    authorizationHeader += headerParameterKeys[i] + '="' + headerParameters[headerParameterKeys[i]] + '",';
                }
            }
            return { signature_base_string: signatureBaseString, authorization_header: authorizationHeader, signature: headerParameters.oauth_signature };
        }
        else {
            return { fail: "Missing jsSHA JavaScript library" };
        }
    };
    TwitterUtils.prototype.createNonce = function (length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    TwitterUtils.prototype.escapeSpecialCharacters = function (string) {
        var tmp = encodeURIComponent(string);
        tmp = tmp.replace(/\!/g, "%21");
        tmp = tmp.replace(/\'/g, "%27");
        tmp = tmp.replace(/\(/g, "%28");
        tmp = tmp.replace(/\)/g, "%29");
        tmp = tmp.replace(/\*/g, "%2A");
        return tmp;
    };
    TwitterUtils.prototype.transformRequest = function (obj) {
        var str = [];
        for (var p in obj)
            str.push(encodeURIComponent(p) + "=" + this.escapeSpecialCharacters(obj[p]));
        console.log(str.join('&'));
        return str.join('&');
    };
    TwitterUtils.prototype.createTwitterSignature = function (method, url, bodyParameters, clientId, clientSecret, oauthKey, oauthSecret) {
        var oauthObject = {
            oauth_consumer_key: clientId,
            oauth_nonce: this.createNonce(10),
            oauth_signature_method: "HMAC-SHA1",
            oauth_token: oauthKey,
            oauth_timestamp: Math.round((new Date()).getTime() / 1000.0),
            oauth_version: "1.0"
        };
        var signatureObj = this.createSignature(method, url, oauthObject, bodyParameters, clientSecret, oauthSecret);
        return signatureObj;
    };
    return TwitterUtils;
}());
TwitterUtils = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], TwitterUtils);
export { TwitterUtils };
//# sourceMappingURL=twitter-utils.js.map