const SYSTEM_NAME = "PNTT"

/** Cached Key */
class CacheKey {
  static readonly TOKEN = `${SYSTEM_NAME}-accessToken`
  static readonly REFRESH_TOKEN = `${SYSTEM_NAME}-refreshToken`
  static readonly CONFIG_LAYOUT = `${SYSTEM_NAME}-config-layout-key`
  static readonly SIDEBAR_STATUS = `${SYSTEM_NAME}-sidebar-status-key`
  static readonly ACTIVE_THEME_NAME = `${SYSTEM_NAME}-active-theme-name-key`
  static readonly VISITED_VIEWS = `${SYSTEM_NAME}-visited-views-key`
  static readonly CACHED_VIEWS = `${SYSTEM_NAME}-cached-views-key`
}

export default CacheKey
