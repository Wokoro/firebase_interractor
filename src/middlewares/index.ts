import { bodyParserHandler, compressionHandler, corsHandler} from './common'

export default [corsHandler, compressionHandler, bodyParserHandler ];