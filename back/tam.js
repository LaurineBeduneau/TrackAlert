/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.namespace = (function() {

    /**
     * Namespace namespace.
     * @exports namespace
     * @namespace
     */
    var namespace = {};

    namespace.TAMResponse = (function() {

        /**
         * Properties of a TAMResponse.
         * @memberof namespace
         * @interface ITAMResponse
         * @property {string|null} [id] TAMResponse id
         * @property {string|null} [name] TAMResponse name
         * @property {string|null} [status] TAMResponse status
         */

        /**
         * Constructs a new TAMResponse.
         * @memberof namespace
         * @classdesc Represents a TAMResponse.
         * @implements ITAMResponse
         * @constructor
         * @param {namespace.ITAMResponse=} [properties] Properties to set
         */
        function TAMResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TAMResponse id.
         * @member {string} id
         * @memberof namespace.TAMResponse
         * @instance
         */
        TAMResponse.prototype.id = "";

        /**
         * TAMResponse name.
         * @member {string} name
         * @memberof namespace.TAMResponse
         * @instance
         */
        TAMResponse.prototype.name = "";

        /**
         * TAMResponse status.
         * @member {string} status
         * @memberof namespace.TAMResponse
         * @instance
         */
        TAMResponse.prototype.status = "";

        /**
         * Creates a new TAMResponse instance using the specified properties.
         * @function create
         * @memberof namespace.TAMResponse
         * @static
         * @param {namespace.ITAMResponse=} [properties] Properties to set
         * @returns {namespace.TAMResponse} TAMResponse instance
         */
        TAMResponse.create = function create(properties) {
            return new TAMResponse(properties);
        };

        /**
         * Encodes the specified TAMResponse message. Does not implicitly {@link namespace.TAMResponse.verify|verify} messages.
         * @function encode
         * @memberof namespace.TAMResponse
         * @static
         * @param {namespace.ITAMResponse} message TAMResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TAMResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.status);
            return writer;
        };

        /**
         * Encodes the specified TAMResponse message, length delimited. Does not implicitly {@link namespace.TAMResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof namespace.TAMResponse
         * @static
         * @param {namespace.ITAMResponse} message TAMResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TAMResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TAMResponse message from the specified reader or buffer.
         * @function decode
         * @memberof namespace.TAMResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {namespace.TAMResponse} TAMResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TAMResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.namespace.TAMResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.status = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TAMResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof namespace.TAMResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {namespace.TAMResponse} TAMResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TAMResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TAMResponse message.
         * @function verify
         * @memberof namespace.TAMResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TAMResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            return null;
        };

        /**
         * Creates a TAMResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof namespace.TAMResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {namespace.TAMResponse} TAMResponse
         */
        TAMResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.namespace.TAMResponse)
                return object;
            var message = new $root.namespace.TAMResponse();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.status != null)
                message.status = String(object.status);
            return message;
        };

        /**
         * Creates a plain object from a TAMResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof namespace.TAMResponse
         * @static
         * @param {namespace.TAMResponse} message TAMResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TAMResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.status = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this TAMResponse to JSON.
         * @function toJSON
         * @memberof namespace.TAMResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TAMResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TAMResponse
         * @function getTypeUrl
         * @memberof namespace.TAMResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TAMResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/namespace.TAMResponse";
        };

        return TAMResponse;
    })();

    namespace.TAMService = (function() {

        /**
         * Constructs a new TAMService service.
         * @memberof namespace
         * @classdesc Represents a TAMService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function TAMService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (TAMService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = TAMService;

        /**
         * Creates new TAMService service using the specified rpc implementation.
         * @function create
         * @memberof namespace.TAMService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {TAMService} RPC service. Useful where requests and/or responses are streamed.
         */
        TAMService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link namespace.TAMService#getTAMData}.
         * @memberof namespace.TAMService
         * @typedef GetTAMDataCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {namespace.TAMResponse} [response] TAMResponse
         */

        /**
         * Calls GetTAMData.
         * @function getTAMData
         * @memberof namespace.TAMService
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @param {namespace.TAMService.GetTAMDataCallback} callback Node-style callback called with the error, if any, and TAMResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TAMService.prototype.getTAMData = function getTAMData(request, callback) {
            return this.rpcCall(getTAMData, $root.google.protobuf.Empty, $root.namespace.TAMResponse, request, callback);
        }, "name", { value: "GetTAMData" });

        /**
         * Calls GetTAMData.
         * @function getTAMData
         * @memberof namespace.TAMService
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @returns {Promise<namespace.TAMResponse>} Promise
         * @variation 2
         */

        return TAMService;
    })();

    return namespace;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Empty = (function() {

            /**
             * Properties of an Empty.
             * @memberof google.protobuf
             * @interface IEmpty
             */

            /**
             * Constructs a new Empty.
             * @memberof google.protobuf
             * @classdesc Represents an Empty.
             * @implements IEmpty
             * @constructor
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Empty instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             * @returns {google.protobuf.Empty} Empty instance
             */
            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Empty message.
             * @function verify
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Empty} Empty
             */
            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Empty)
                    return object;
                return new $root.google.protobuf.Empty();
            };

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.Empty} message Empty
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Empty to JSON.
             * @function toJSON
             * @memberof google.protobuf.Empty
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Empty
             * @function getTypeUrl
             * @memberof google.protobuf.Empty
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Empty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Empty";
            };

            return Empty;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
