import Foundation

@objc public class CookieManager: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
